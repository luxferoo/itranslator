function getConfig(config, dc) {
    return {
        base: process.cwd() + '/' + (config.folder ? config.folder : dc.folder),
        lang: config.lang ? config.lang : dc.lang
    }
}

function getFileContent(config, dc) {
    try {
        return require(config.base + '/' + config.lang + '.json');
    } catch (e) {
        return require(config.base + '/' + dc.lang + '.json');
    }
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

module.exports = {
    getConfig: getConfig,
    getFileContent: getFileContent,
    processContent: processContent
};