const {
    trans,
    config
} = require("./index");
const assert = require('assert');

beforeEach(function () {
    config({})
});

describe('No configuration provided', function () {
    it('returns the same passed string', function () {
        assert.equal(trans("foo"), "foo")
    })
});

describe('Provide a global source', function () {
    it('translates correctly', function () {
        config({
            source: {
                en: {
                    hello: "hello"
                }
            }
        })
        assert.equal(trans("en.hello"), "hello")
    })
});

describe('Provide a local source', function () {
    it('translates correctly', function () {
        assert.equal(trans("it.hello", {
            source: {
                it: {
                    hello: "bonjourno"
                }
            }
        }), "bonjourno")
    })
});

describe('Provide vars', function () {
    it('translates correctly and replace var', function () {
        assert.equal(trans("it.hello", {
            vars : {
                name : "imam"
            },
            source: {
                it: {
                    hello: "bonjourno %name%"
                }
            }
        }), "bonjourno imam")
    })
});

describe('Passing invalid configuration', function () {
    it('throws invalid configuration key error', function () {
        assert.throws(trans.bind(null,"it.hello", {
            var : {
                name : "imam"
            },
            source: {
                it: {
                    hello: "bonjourno %name%"
                }
            }
        }), Error("var is not a configuration parameter. Only 'vars' and 'source' are supported."))
    })
    it('throws invalid configuration value', function () {
        assert.throws(trans.bind(null,"it.hello", {
            vars : 1,
            source: {
                it: {
                    hello: "bonjourno %name%"
                }
            }
        }), Error("vars must be of type json object."))
    })
});