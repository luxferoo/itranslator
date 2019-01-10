var helper = require("./helper");
var assert = require('assert');

describe('Gets the configuration object', function () {
    it('should return a valid configuration object', function () {
        var config = helper.getConfig("translation", "en");
        assert.ok(config.hasOwnProperty("base") && config.hasOwnProperty("lang"));
    });

    it('should return an invalid configuration object', function () {
        var config = helper.getConfig(null, null);
        assert.ok(!config.lang);
    });
});

describe('Gets translation file content', function () {
    var options = {lang: "ar"};
    var config = helper.getConfig("translation", options.lang);

    it("doesn't throw an exception", function () {
        assert.doesNotThrow(helper.getFileContent.bind(null, config.base, config.lang));
    });
    it("throws an exception", function () {
        assert.throws(helper.getFileContent.bind(null, config.base, null));
    });
});

describe('Processing the file to get the translation', function () {
    var config = helper.getConfig("translation", "en");
    var content = helper.getFileContent(config.base, "en");
    var vars = {email: "imamharir@gmail.com"};

    it("returns the right translation", function () {
       assert.equal(helper.processContent(content, "info.yourEmail", vars), "your email is : imamharir@gmail.com")
    });

});


describe('Getting the configuration from package.json', function () {
    it("does not throw error when trying to get lang value", function () {
        assert.doesNotThrow(helper.getPackageFolderLangConfig)
    });
    it("does not throw error when trying to get folder name value", function () {
        assert.doesNotThrow(helper.getPackageFolderNameConfig)
    });

});
