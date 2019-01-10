'use strict';

var helper = require('./helper');

/**
 *
 * @param {string} str - the string to translate
 * @returns {string}
 */
module.exports = function (str) {
    var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var lang =   options.lang ? options.lang : helper.getPackageFolderLangConfig();
    var translationFolder = options.folder ? options.folder : helper.getPackageFolderNameConfig();

    var config = helper.getConfig(translationFolder, lang);
    var content = helper.getFileContent(config.base, config.lang);

    return helper.processContent(content, str, vars);
};