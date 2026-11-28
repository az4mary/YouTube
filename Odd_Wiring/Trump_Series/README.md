# Perplexity Orchestrator

This folder was empty, so this is a small reusable JavaScript integration and CLI for the Perplexity Orchestrator API. It uses the official OpenAI SDK with Chat Completions at `https://api.perplexity.ai/orchestrator/v1`; it does not use the Perplexity SDK and does not add web grounding.

## Setup

Create an API key in the [Perplexity API Console](https://console.perplexity.ai), then set it in your own PowerShell session. The secure prompt keeps the key out of command history and project files:

```powershell
$key = Read-Host "Perplexity API key" -AsSecureString
$env:PERPLEXITY_API_KEY = [System.Net.NetworkCredential]::new("", $key).Password
npm install
```

List the model IDs returned for this key and usage tier:

```powershell
npm run models
```

Set `PERPLEXITY_MODEL` to an exact ID from that output. The integration does not assume or hardcode a model slug.

```powershell
$env:PERPLEXITY_MODEL = Read-Host "Model ID from npm run models"
npm run chat -- "Explain how a transformer attends to tokens in one paragraph."
```

The chat command prints the response text. In application code, import `chatCompletion` from `./perplexity_orchestrator.js` and pass the OpenAI-compatible `messages` array. The function also forwards Chat Completions options, including `stream: true` and `stream_options: { include_usage: true }`.

The OpenAI SDK retries transient 429 responses and honors a server-provided `Retry-After` interval within its retry policy. If retries are exhausted, the CLI reports the HTTP status and available retry interval without printing request credentials.
