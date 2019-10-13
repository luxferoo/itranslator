# translator
node module to deal with translation in your app

## Install
Using yarn : 
```
yarn add itranslator
```

Using npm : 
```
npm install itranslator
```
## Usage
```node
const {
  trans,
  config
} = require('itranslator');

//Returns the same string if no configuration provided
trans('en.hello'); // "en.hello" 

//You can put a global configuration at the entry point of your app
config({
  source : {
    en : {
      hello : "hello"
    }
  }
});

trans('en.hello'); // "hello" 

//It's also possible to override the global configuration if needed
trans('it.hello',{
  vars : {
    name : 'imam'
  },
  source : {
    it : {
      hello : 'bonjourno %name%'
    }
  }
}); // "bonjourno imam" 
```