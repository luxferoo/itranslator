var json = require(process.cwd() + '/package.json');

function getConfig(folder, lang) {
    return {
        base: process.cwd() + '/' + folder,
        lang: lang
    }
}

function getFileContent(base, lang) {
    return require(base + '/' + lang + '.json');
}

function processContent(content, string, vars) {
    try {
        var chunks = string.split('.');
        for (var i in chunks) {
            content = content[chunks[i]];
            if (chunks.length - 1 === +i) {
                for (var j in vars) {
                    content = content.split('%' + j + '%').join(vars[j])
                }
            }
        }
    } catch (e) {
        return string;
    }
    return content === undefined ? string : content;
}


function getPackageFolderLangConfig() {
    if (!json.hasOwnProperty('translator')) throw new Error('You forgot to add "translator" configuration in your package.json');
    if (!json.translator.hasOwnProperty('lang')) throw new Error('You forgot to add a default "lang" value under "translator" configuration');
    return json.translator.lang;
}


function getPackageFolderNameConfig() {
    if (!json.hasOwnProperty('translator')) throw new Error('You forgot to add "translator" configuration in your package.json');
    if (!json.translator.hasOwnProperty('folder')) throw new Error('You forgot to add a default "folder" value under "translator" configuration');
    return json.translator.folder;
}

module.exports = {
    getConfig: getConfig,
    getFileContent: getFileContent,
    processContent: processContent,
    getPackageFolderNameConfig: getPackageFolderNameConfig,
    getPackageFolderLangConfig: getPackageFolderLangConfig
};