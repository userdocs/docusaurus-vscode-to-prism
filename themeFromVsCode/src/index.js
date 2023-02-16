const { writeFileSync, readFileSync } = require("fs");
const JSON5 = require("json5");
const { collectAllSettings } = require("./collectStyles");
const { makeOutput } = require("./template");
const path = require("path");

// Input
// A Github workflow will take the filname from a stored json and created this the theme_name.txt in the loop with the theme being ported
const themeName = readFileSync("./theme_name.txt");
const themeString = readFileSync(themeName);
const theme = JSON5.parse(themeString);

const prismTheme = collectAllSettings(theme.tokenColors);

const json = {
  plain: {
    color: theme.colors["editor.foreground"],
    backgroundColor: theme.colors["editor.background"],
  },
  ...prismTheme,
};

const output = makeOutput(json);

const filename = path.parse("./" + themeName).name; //=> "hello"

writeFileSync(filename + ".js", output);
