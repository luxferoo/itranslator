const {trans} = require('../../lib');

module.exports = () => {
  return trans('en.greeting', {vars: new Map().set('name', 'Imam')});
};
