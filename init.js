var fs = require('fs');

var base = process.cwd() + '/translation';

fs.mkdir(base, function (e) {
    fs.writeFile(base + '/en.json', null, null, function () {
        console.log('\x1B[32m en.json created under: ' + base + '\x1B[0m ');
    });
});