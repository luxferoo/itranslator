'use strict';

var json = require(process.cwd() + '/package.json');
var fs = require('fs');

if (!json.hasOwnProperty('translator')) throw new Error('You forgot to add "translator" configuration in your package.json');

if (!json.translator.hasOwnProperty('folder')) throw new Error('You forgot to add a default "folder" value under "translator" configuration');

if (!json.translator.hasOwnProperty('lang')) throw new Error('You forgot to add a default "lang" value under "translator" configuration');

/**
 *
 * @param {string} str - the string to translate
 * @returns {string}
 */
module.exports = function (str) {
    var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var dc = json.translator;
    var base = process.cwd() + '/';
    base += config.folder ? config.folder : dc.folder;
    var lang = config.lang ? config.lang : dc.lang;

    //Check if the translation folder exists
    if (!fs.existsSync(base)) {
        throw new Error('Translator folder not found : ' + base);
    }

    var file = base + '/' + lang + '.json';
    /*
        Check if the file exists
        if not replace the given lang with the default lang
    */
    if (!fs.existsSync(file)) {
        file = base + '/' + dc.lang + '.json';
    }

    try {
        var message = require(file);
    } catch (e) {
        throw new Error('File not found : ' + file);
    }

    try {
        var chunks = str.split('.');
        for (var i in chunks) {
            message = message[chunks[i]];
            if (chunks.length - 1 === +i) {
                for (var j in vars) {
                    message = message.split('%' + j + '%').join(vars[j])
                }
            }
        }
    } catch (e) {
        return str;
    }
    return message === undefined ? str : message;
};