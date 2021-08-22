[![npm version](https://badge.fury.io/js/itranslator.svg)](https://badge.fury.io/js/itranslator)
![](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)

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
  setConfig
} = require('itranslator');

//Returns the same string if no configuration provided
trans('en.hello'); // "en.hello" 

//You can put a global configuration at the entry point of your app
setConfig({
  source : {
    en : {
      hello : "hello"
    },
    it : { 
      hello : "bonjourno"
    }
  }
});

trans('en.hello'); // "hello" 
trans('it.hello'); // "bonjourno" 

//It's also possible to override the global configuration if needed
trans('it.hello',{
  vars : new Map().set('name', 'imam'),
  source : {
    it : {
      hello : 'bonjourno %name%'
    }
  }
}); // "bonjourno imam" 

trans('it.hello'); // "bonjourno imam" 
```
