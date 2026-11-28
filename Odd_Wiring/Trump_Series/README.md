# Perplexity Search API

This folder contains a small JavaScript client and CLI for Perplexity's Search API. It returns ranked web results as JSON for your code to process; it does not generate an LLM answer.

## Setup

Create an API key in the [Perplexity API Console](https://console.perplexity.ai), then set it in your own PowerShell session. The secure prompt keeps the key out of command history and project files:

```powershell
$key = Read-Host "Perplexity API key" -AsSecureString
$env:PERPLEXITY_API_KEY = [System.Net.NetworkCredential]::new("", $key).Password
npm install
```

## Search

```powershell
npm run search -- "latest stable Python release"
npm run search -- --max-results 5 "latest stable Python release"
```

The CLI prints the structured response JSON. Search returns 1 to 20 results (`10` by default). In application code, import `searchWeb` from `./perplexity_search.js` and pass an optional `maxResults` value.
