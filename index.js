'use strict';

var json = require(process.cwd() + '/package.json');
var helper = require('./helper');

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
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var dc = json.translator;
    var config = helper.getConfig(options, dc);
    var content = helper.getFileContent(config, dc);
    return helper.processContent(content, str, vars);
};