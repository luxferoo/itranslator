const {setConfig,trans} = require('../lib');
const getUser = require('./getUser');

// This can be called at the entry point of your project to set a global translations source
setConfig({
  source : {
    en : {
      hello : "hello",
      greeting : "hello %name%"
    },
    it : { 
      hello : "bonjourno",
      greeting : "bonjourno %name%"
    }
  }
});

trans('en.hello'); // hello
trans('it.hello'); // bonjourno

const user = getUser();

trans('en.greeting', {vars : new Map().set('name',`${user.firstName} ${user.lastName}`)}); // hello Imam Harir
trans('it.greeting', {vars : new Map().set('name',`${user.firstName} ${user.lastName}`)}); // bonjourno Imam Harir

// Override source
trans('en.hello', {source : {en :{hello : 'Hello !'}}}) // Hello !