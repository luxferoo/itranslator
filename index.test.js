const { trans, config } = require("./index");

beforeEach(function () {
  config({});
});

describe("No configuration provided", function () {
  it("returns the same passed string", function () {
    expect(trans("foo")).toBe("foo");
  });
});

describe("Provide a global source", function () {
  it("translates correctly", function () {
    config({
      source: {
        en: {
          hello: "hello",
        },
      },
    });
    expect(trans("en.hello")).toBe("hello");
  });
});

describe("Provide a local source", function () {
  it("translates correctly", function () {
    expect(
      trans("it.hello", {
        source: {
          it: {
            hello: "bonjourno",
          },
        },
      })
    ).toBe("bonjourno");
  });
});

describe("Provide vars", function () {
  it("translates correctly and replace var", function () {
    expect(
      trans("it.hello", {
        vars: {
          name: "imam",
        },
        source: {
          it: {
            hello: "bonjourno %name%",
          },
        },
      })
    ).toBe("bonjourno imam");
  });
});

describe("Passing invalid configuration", function () {
  it("throws invalid configuration key error", function () {
    expect(
      trans.bind(null, "it.hello", {
        var: {
          name: "imam",
        },
        source: {
          it: {
            hello: "bonjourno %name%",
          },
        },
      })
    ).toThrow(
      Error(
        "var is not a configuration parameter. Only 'vars' and 'source' are supported."
      )
    );
  });
  it("throws invalid configuration value", function () {
    expect(
      trans.bind(null, "it.hello", {
        vars: 1,
        source: {
          it: {
            hello: "bonjourno %name%",
          },
        },
      })
    ).toThrow(Error("vars must be of type json object."));
  });
});
