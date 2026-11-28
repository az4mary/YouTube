import OpenAI from "openai";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

export const ORCHESTRATOR_BASE_URL = "https://api.perplexity.ai/orchestrator/v1";

class ConfigurationError extends Error {}

let client;

function getClient() {
  if (client) return client;

  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) {
    throw new ConfigurationError(
      "PERPLEXITY_API_KEY is missing. Create a key at https://console.perplexity.ai and export it in your own terminal."
    );
  }

  client = new OpenAI({ apiKey, baseURL: ORCHESTRATOR_BASE_URL });
  return client;
}

/** Return the model IDs available to this API key and usage tier. */
export async function listModels() {
  const response = await getClient().models.list();
  return response.data.map(({ id }) => id).sort();
}

/**
 * Send OpenAI-compatible chat messages through Perplexity Orchestrator.
 * Set PERPLEXITY_MODEL to an ID returned by listModels(), or pass model in options.
 */
export async function chatCompletion(messages, options = {}) {
  const { model: requestedModel, ...requestOptions } = options;
  const model = requestedModel ?? process.env.PERPLEXITY_MODEL;
  if (!model) {
    throw new ConfigurationError(
      "PERPLEXITY_MODEL is missing. Run `npm run models` and set it to an exact returned model ID."
    );
  }

  const response = await getClient().chat.completions.create({
    ...requestOptions,
    model,
    messages,
  });

  if (!requestOptions.stream && response.choices.length !== 1) {
    throw new Error(`Expected one Chat Completions choice; received ${response.choices.length}.`);
  }

  return response;
}

function formatFailure(error) {
  if (error instanceof ConfigurationError) return error.message;

  const status = error?.status;
  if (status === 401) {
    return "Perplexity returned HTTP 401. Check that PERPLEXITY_API_KEY is valid.";
  }
  if (status === 402) {
    return "Perplexity returned HTTP 402. The selected model is not enabled for this usage tier; choose an ID from `npm run models`.";
  }
  if (status === 429) {
    const retryAfter = error?.headers?.get?.("retry-after");
    return `Perplexity returned HTTP 429 after SDK retries. Honor Retry-After${retryAfter ? ` (${retryAfter} seconds)` : ""} before retrying.`;
  }
  if (Number.isInteger(status)) {
    return `Perplexity request failed with HTTP ${status}. Check the model ID and request configuration.`;
  }

  return "Perplexity request failed due to a network or SDK error.";
}

async function main(args) {
  if (args.includes("--help") || args.includes("-h")) {
    console.log("Usage: npm run models | npm run chat -- <prompt>");
    return;
  }

  if (args.includes("--list-models")) {
    for (const model of await listModels()) console.log(model);
    return;
  }

  const prompt = args.join(" ").trim();
  if (!prompt) {
    console.error("Provide a prompt. Run with --help for usage.");
    process.exitCode = 2;
    return;
  }

  const response = await chatCompletion([{ role: "user", content: prompt }]);
  console.log(response.choices[0].message.content ?? "");
}

const isDirectExecution =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(formatFailure(error));
    process.exitCode = 1;
  });
}
