const {setConfig} = require('../../lib');
const translator = require('./translator');

setConfig({
  source: {
    en: {
      greeting: 'Hello %name%',
    },
  },
});

console.log(translator());
