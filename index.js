let config;

module.exports = {
    trans(string, configuration) {
        const _config = {
            ...config,
            ...configuration
        }
        checkConfig(_config);
        const { vars, source } = _config;
        let _source = source;
        try {
            const chunks = string.split('.');
            for (let i in chunks) {
                _source = _source[chunks[i]];
                if (chunks.length - 1 === +i) {
                    for (let j in vars) {
                        _source = _source.split('%' + j + '%').join(vars[j])
                    }
                }
            }
        } catch (e) {
            return string;
        }
        return _source === undefined ? string : _source;
    },
    config(configuration) {
        checkConfig(configuration);
        config = configuration;
    }
};

function checkConfig(config) {
    if (typeof config !== "object") {
        throw new Error("configuration must be of type json object.")
    }

    Object.entries(config).forEach(entry => {
        if (!["vars", "source"].includes(entry[0])) {
            throw new Error(entry[0] + " is not a configuration parameter. Only 'vars' and 'source' are supported.")
        }

        if (["vars", "source"].includes(entry[0]) && typeof entry[1] !== "object") {
            throw new Error(entry[0] + " must be of type json object.")
        }
    })
}