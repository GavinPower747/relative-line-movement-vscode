# Relative Lines for VS Code

Relative Lines is a VS Code extension that intuitively allows you to move the cursor between relative lines and columns in any file, enhancing navigation especially in large files. This extension is particularly useful when working with code or text where relative movement is more intuitive than absolute line numbers. It's kind of like the vim relative line movement ... but with more steps.

## Features

- **Increase Column**: Move the cursor right by a specified number of columns.
- **Decrease Column**: Move the cursor left by a specified number of columns.
- **Increase Row**: Move the cursor down by a specified number of rows.
- **Decrease Row**: Move the cursor up by a specified number of rows.

## Usage

After installation, the extension automatically switches the line numbering to relative to enhance the experience of navigating with relative commands. 

To use the commands, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and type:

- `Increase Columns`: to move right by a specified number of columns.
- `Decrease Columns`: to move left by a specified number of columns.
- `Increase Rows`: to move down by a specified number of rows.
- `Decrease Rows`: to move up by a specified number of rows.

Alternatively, use the configurable keybindings for even quicker navigation.

## Default Keybindings

The extension comes with default keybindings to help you navigate quickly:

- **Increase Columns**: `Ctrl+M` followed by `Right Arrow` type the amount you want to move and hit enter
- **Decrease Columns**: `Ctrl+M` followed by `Left Arrow` type the amount you want to move and hit enter
- **Increase Rows**: `Ctrl+M` followed by `Down Arrow` type the amount you want to move and hit enter
- **Decrease Rows**: `Ctrl+M` followed by `Up Arrow` type the amount you want to move and hit enter

e.g. I want to move down 20 lines from where I am now `Ctrl+M` then `Down Arrow` then `20` then `Enter`

### Customizing Keybindings

To customize these keybindings:

1. Open the Command Palette with `Ctrl+Shift+P` or `Cmd+Shift+P`.
2. Type `Open Keyboard Shortcuts (JSON)` and select it.
3. Add your custom keybindings for the commands, for example:

```json
{
    "key": "ctrl+alt+right",
    "command": "relative-lines.increaseColumns",
    "when": "editorTextFocus"
},
{
    "key": "ctrl+alt+left",
    "command": "relative-lines.decreaseColumns",
    "when": "editorTextFocus"
}
```

## Extension Settings

This extension contributes the following commands:

- `relative-lines.increaseColumns`: Increase the cursor column position.
- `relative-lines.decreaseColumns`: Decrease the cursor column position.
- `relative-lines.increaseRows`: Increase the cursor row position.
- `relative-lines.decreaseRows`: Decrease the cursor row position.

It also temporarily changes the editor's line number setting to `relative` for a better user experience. Upon deactivation, it reverts to the original line numbering setting.

## Requirements

- Visual Studio Code 1.85.0 or higher.

## Installation

Search for "Relative Lines" in the VS Code Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS) and click `Install`. Alternatively, you can download it from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/).

## Known Issues

No known issues so far. If you encounter any problems, please file an issue on the GitHub repository.

## Release Notes

### 1.0.0

Initial release of Relative Lines.

- Navigate between relative lines and columns intuitively.
- Automatically switches line numbering to relative.

## Contributing

Contributions are always welcome! Whether it's filing an issue, submitting a feature request, or making a pull request, your feedback and contributions will help improve Relative Lines for everyone.

## License

[MIT License](LICENSE)

---