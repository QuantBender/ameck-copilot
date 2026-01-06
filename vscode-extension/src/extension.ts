import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    console.log('Ameck Copilot extension activated');

    const openCmd = vscode.commands.registerCommand('ameck-copilot.open', async () => {
        // Open local web UI in default browser
        const url = 'http://127.0.0.1:8000/';
        vscode.env.openExternal(vscode.Uri.parse(url));
    });

    const startCmd = vscode.commands.registerCommand('ameck-copilot.startServer', async () => {
        const terminal = vscode.window.createTerminal('Ameck Copilot');
        terminal.show(true);
        // Run the local server using CLI entrypoint
        terminal.sendText('ameck-copilot');
        vscode.window.showInformationMessage('Started Ameck Copilot server in terminal');
    });

    context.subscriptions.push(openCmd, startCmd);
}

export function deactivate() {}
