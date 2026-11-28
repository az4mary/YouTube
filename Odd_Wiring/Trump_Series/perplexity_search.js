import Perplexity from "@perplexity-ai/perplexity_ai";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const MAX_RESULTS = 20;
const DEFAULT_MAX_RESULTS = 10;

class ConfigurationError extends Error {}

let client;

function getClient() {
  if (client) return client;

  if (!process.env.PERPLEXITY_API_KEY) {
    throw new ConfigurationError(
      "PERPLEXITY_API_KEY is missing. Create a key at https://console.perplexity.ai and set it in your terminal."
    );
  }

  client = new Perplexity();
  return client;
}

/** Return ranked web results for a query without generating an LLM answer. */
export async function searchWeb(query, { maxResults = DEFAULT_MAX_RESULTS } = {}) {
  if (typeof query !== "string" || query.trim().length === 0) {
    throw new ConfigurationError("A non-empty search query is required.");
  }
  if (!Number.isInteger(maxResults) || maxResults < 1 || maxResults > MAX_RESULTS) {
    throw new ConfigurationError(`maxResults must be an integer from 1 to ${MAX_RESULTS}.`);
  }

  return getClient().search.create({
    query: query.trim(),
    max_results: maxResults,
  });
}

function formatFailure(error) {
  if (error instanceof ConfigurationError) return error.message;

  const status = error?.status;
  if (status === 401) {
    return "Perplexity returned HTTP 401. Check that PERPLEXITY_API_KEY is valid.";
  }
  if (status === 403) {
    return "Perplexity returned HTTP 403. Check that this API project has Search API access.";
  }
  if (status === 429) {
    return "Perplexity Search API rate limit reached (HTTP 429). Wait for the Retry-After interval, if provided, before retrying.";
  }
  if (Number.isInteger(status)) {
    return `Perplexity Search API request failed with HTTP ${status}. Check the query and request configuration.`;
  }

  return "Perplexity Search API request failed due to a network or SDK error.";
}

async function main(args) {
  if (args.includes("--help") || args.includes("-h")) {
    console.log("Usage: npm run search -- [--max-results 1..20] <query>");
    return;
  }

  let maxResults = DEFAULT_MAX_RESULTS;
  const maxResultsIndex = args.indexOf("--max-results");
  if (maxResultsIndex !== -1) {
    const value = args[maxResultsIndex + 1];
    if (value === undefined) {
      console.error("Provide a number after --max-results.");
      process.exitCode = 2;
      return;
    }
    maxResults = Number(value);
    args.splice(maxResultsIndex, 2);
  }

  const query = args.join(" ").trim();
  if (!query) {
    console.error("Provide a search query. Run with --help for usage.");
    process.exitCode = 2;
    return;
  }

  const response = await searchWeb(query, { maxResults });
  console.log(JSON.stringify(response, null, 2));
}

const isDirectExecution =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(formatFailure(error));
    process.exitCode = 1;
  });
}
