#!/usr/bin/env bash

pushd vscode-themes || exit 1
mapfile -t file_paths_array < <(find . -type f -name "*.json")
popd || exit 1

pushd themeFromVsCode || exit 1
npm install
npm audit fix
popd || exit 1

for files in "${file_paths_array[@]/\.\//}"; do
	mkdir -p "docusaurus-themes/src/prism/themes/${files%%/*}"
	cp "vscode-themes/${files}" "themeFromVsCode/"
	printf %s "${files##*/}" > "themeFromVsCode/theme_name.txt"
	pushd themeFromVsCode || exit 1
	npm start
	popd || exit 1
	ported_theme="${files##*/}" ported_theme="${ported_theme/\.json/\.js}"
	cp "themeFromVsCode/${ported_theme}" "docusaurus-themes/src/prism/themes/${files%%/*}"
	rm -rf "themeFromVsCode/${ported_theme}" "themeFromVsCode/${files##*/}" "themeFromVsCode/theme_name.txt"
done
