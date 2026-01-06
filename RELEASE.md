# Release & Publishing Guide

This document explains how to publish the project to PyPI, VS Code Marketplace, and push the repository to GitHub (QuantBender).

Prerequisites
- You have owner access to the `QuantBender` org (or permission to create repos) and an account on PyPI.
- GitHub secrets for Actions:
  - `PYPI_API_TOKEN` — PyPI API token (use `__token__` username in twine)
  - `VSCE_TOKEN` — VS Code Marketplace publisher token

Publish to GitHub (create repo under QuantBender)
1. Create a new repository `QuantBender/ameck-copilot` (or give me access so I can create it).
2. Push the current codebase to that repository:
   - git remote add origin git@github.com:QuantBender/ameck-copilot.git
   - git push -u origin main
3. In the repository settings, enable GitHub Actions and add the secrets `PYPI_API_TOKEN` and `VSCE_TOKEN`.

Publish to PyPI (automatic via GitHub Actions)
1. Create a PyPI API token in your PyPI account with "Upload projects" scope.
2. Add token as `PYPI_API_TOKEN` in repository secrets.
3. Create a new tag and push (e.g., `git tag v1.0.0 && git push --tags`). The `publish-python.yml` workflow will build and publish the package.

Publish VS Code Extension (automatic via GitHub Actions)
1. Create a VS Code publisher and obtain a `VSCE_TOKEN`.
2. Add `VSCE_TOKEN` to the repository secrets.
3. Tag a release (e.g., `v1.0.0`) and push; the `publish-vscode.yml` workflow will package and publish the extension.

Notes & Safety
- Workflows are set to trigger only on tags matching `v*` to prevent accidental publishes from branch pushes.
- I can help create the GitHub repository and add the workflows if you grant me a token with the appropriate scopes, or you can perform the final steps yourself.
