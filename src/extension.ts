import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const originalLineNumbers = vscode.workspace.getConfiguration('editor').get('lineNumbers');
    context.workspaceState.update('originalLineNumbers', originalLineNumbers);

    vscode.workspace.getConfiguration('editor').update('lineNumbers', 'relative', vscode.ConfigurationTarget.Global);

    const commands = [
        vscode.commands.registerCommand('relative-lines.increaseColumns', () => moveCursor(Direction.Right)),
        vscode.commands.registerCommand('relative-lines.decreaseColumns', () => moveCursor(Direction.Left)),
        vscode.commands.registerCommand('relative-lines.increaseRows', () => moveCursor(Direction.Up)),
        vscode.commands.registerCommand('relative-lines.decreaseRows', () => moveCursor(Direction.Down))
    ];

    context.subscriptions.push(...commands, vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('editor.lineNumbers')) {
            const updatedLineNumbers = vscode.workspace.getConfiguration('editor').get('lineNumbers');
            context.workspaceState.update('originalLineNumbers', updatedLineNumbers);
        }
    }));
}

export function deactivate(context: vscode.ExtensionContext) {
    const originalLineNumbers = context.workspaceState.get<string>('originalLineNumbers');

    if (originalLineNumbers) {
        vscode.workspace.getConfiguration('editor').update('lineNumbers', originalLineNumbers, vscode.ConfigurationTarget.Global);
    }
}

async function moveCursor(direction: Direction) {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        return;
    }

    const numberInput = await vscode.window.showInputBox({ prompt: "Enter the number of positions to move:" });
    const moveBy = parseInt(numberInput || '0', 10);

    if (isNaN(moveBy)) {
        vscode.window.showErrorMessage("Enter a valid number");
        return;
    }

    const x = direction === Direction.Left || direction === Direction.Right ? 1 : 0;
    const y = direction === Direction.Up || direction === Direction.Down ? 1 : 0;
    const multiplier = direction === Direction.Up || direction === Direction.Left ? -1 : 1;

    const newPosition = editor.selection.active.translate((y * moveBy) * multiplier, (x * moveBy) * multiplier);
    const newSelection = new vscode.Selection(newPosition, newPosition);

    editor.selection = newSelection;
    editor.revealRange(editor.selections[0]);
}

enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}
