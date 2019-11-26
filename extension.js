// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
const mimeTypes = require("mime-types");

const TEMP_IMAGE_PATH = __dirname + "/scripts/ezpaste-temp.png";

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "ezpaste" is now active!');
  const disposable = vscode.commands.registerCommand(
    "extension.ezpaste",
    function() {
      vscode.env.clipboard.readText().then(val => {
        if (val) {
          vscode.window.showInformationMessage(
            "Image is not on your clipboard, please check again."
          );
        } else {
          handleImagePaste();
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

function handleImagePaste() {
  const platform = process.platform;
  if (platform == "win32") {
    const execWin32 = require("child_process").spawn;
    execWin32(__dirname + "/scripts/pasteFromClip.bat");
    const imgTag = zipAndEncode(TEMP_IMAGE_PATH);

    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const current = editor.selection;
      editor.edit(edit => {
        edit.insert(current.active, imgTag);
      });
    } else {
      vscode.window.showInformationMessage(
        "Please execute command in an active edit window."
      );
    }
  } else {
    vscode.window.showErrorMessage(
      "Sorry, the extension supports Windows only, for now."
    );
  }
}

/**
 * @param {string} filePath
 */
function zipAndEncode(filePath) {
  const type = mimeTypes.lookup(filePath);
  const result = fs.readFileSync(filePath);
  const data = Buffer.from(result).toString("base64");
  const base64 = "data:" + type + ";base64," + data;
  const imgTag = `<img src="` + base64 + `" />`;
  return imgTag;
}

module.exports = {
  activate,
  deactivate
};
