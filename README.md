# docusaurus-vscode-to-prism

A vscode theme converter using this tool

https://github.com/FormidableLabs/prism-react-renderer/tree/master/tools/themeFromVsCode

It has been slightly modified to output a working Docusaurus prism js file with no further user intervention required.

## How it works

It will take any vscode theme json files in the `vscode-themes` directory and create Docusaurus compatible themes from them and place them in the `docusaurus-themes/src/prism/themes` directory.

## How to use it

This is done either by a workflow in this repo. Fork it and activate the workflows. It should just work.

By cloning the locally repo, adding your themes and running the `build.sh` script.

## Installation

Copy the themes you want from the

```text
docusaurus-themes/src/prism/themes/themeName
```

Place them in this folder, create it if it does not exist

```text
src/prism/themes/themeName
```

Now in your `docusaurus.config.js` modify the theme lines to this, where it points to the themes you selected.

Here the example is the `bearded-theme-black-ruby.js` from the `bearded` folder.

```js
const lightCodeTheme = require("./src/prism/themes/bearded/bearded-theme-black-ruby.js");
const darkCodeTheme = require("./src/prism/themes/bearded/bearded-theme-black-ruby.js");
```

You can take a single theme `js` file and rename to `index.js` and place it in a folder. The point to the folder and it will autoload this theme.
