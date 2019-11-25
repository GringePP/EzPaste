// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ezpaste" is now active!');

  const disposable = vscode.commands.registerCommand(
    "extension.ezpaste",
    function() {
      const platform = process.platform;
      if (platform == "win32") {
        const execWin32 = require("child_process").spawn;
        execWin32(__dirname + "/scripts/pasteFromClip.bat");
      }
    }
  );

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
};
