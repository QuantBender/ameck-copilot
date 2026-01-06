# Ameck Copilot VS Code Extension

This extension provides quick integration with the Ameck Copilot web UI:

- Command: `Ameck Copilot: Open Web UI` — opens the local web UI (http://127.0.0.1:8000/)
- Command: `Ameck Copilot: Start Local Server` — starts the server via the `ameck-copilot` CLI

How to package & publish:

1. Install dependencies: `npm install`
2. Compile: `npm run compile`
3. Package: `npx vsce package` or `npm run package` (requires `vsce` installed)

To publish to the VS Code Marketplace, create a publisher and set `VSCE_TOKEN` in GitHub Actions secrets and use the `vsce` publish action.
