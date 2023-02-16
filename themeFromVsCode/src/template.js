const makeOutput = styles => `
// Converted automatically using themeFromVsCode via Github Actions
// https://github.com/userdocs/docusaurus-vscode-to-prism

var theme = ${JSON.stringify(styles, null, 2)};

module.exports = theme;
`.trim() + '\n';

module.exports = { makeOutput };
