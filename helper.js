var fs = require('fs');

function getConfig(config, dc) {
    return {
        base: process.cwd() + '/' + (config.folder ? config.folder : dc.folder),
        lang: config.lang ? config.lang : dc.lang
    }
}

function getFile(config, dc) {
    //Check if the translation folder exists
    if (!fs.existsSync(config.base)) {
        throw new Error('Translator folder not found : ' + config.base);
    }
    var file = config.base + '/' + config.lang + '.json';
    /*
        Check if the file exists
        if not replace the given lang with the default lang
    */
    if (!fs.existsSync(file)) {
        file = config.base + '/' + dc.lang + '.json';
    }
    return file;
}

function processString(message, string, vars) {
    try {
        var chunks = string.split('.');
        for (var i in chunks) {
            message = message[chunks[i]];
            if (chunks.length - 1 === +i) {
                for (var j in vars) {
                    message = message.split('%' + j + '%').join(vars[j])
                }
            }
        }
    } catch (e) {
        return string;
    }
    return message === undefined ? string : message;
}

module.exports = {
    getConfig: getConfig,
    getFile: getFile,
    processString: processString
};