const {trans} = require('../lib/');

console.log(
    trans(
        'en.greeting',
        {
          vars: new Map().set('name', 'imam'),
          source: {en: {greeting: 'Hello %name%'}},
        }),
);
