# EzPaste

**EzPaste** is a tiny little extension to help you paste image to Markdown doc.

Are you tired of copying images from network, pasting to your local diretory and including it to your markdown doc with relative or absolute path? It's pretty annoying when we are focusing on writing.

There are several extensions that can help us paste image to Markdown doc in an elegant way, like uploading your copied image to the cloud then leaves you an url. It's a good way, however, not everyone has a image hosting service.

So, I came out with an idea to encode image in Base64 and use the `<img>` tag to insert into Markdown doc.

The Base64 might be tediously long, but it's still a compromised way to keep yourself in smooth writing.

## Usage

1. Copy any images from network
2. Go to your doc and let the editor cursor be at the right place
3. Press `ctrl+shift+p` to open command input
4. Input `EzPaste` and select `EzPaste: paste image from clipboard`
5. You can see the image pasted to your doc in Base4

_show-how gif is preparing..._

## Requirements

It's availale on Windows for now. MacOS and Linux are on their ways.

## Issues

If you've found any problems, you're welcome to raise issues here. https://github.com/GringePP/EzPaste/issues

## Release Notes

### 1.0

- First release
- Can read image from clipboard and encodes it in Base64
- Paste image with `<img>`
- Available on Windows, for now

**Enjoy!**
