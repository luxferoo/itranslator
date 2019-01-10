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
## Configuration
1- The configuration below is required when you provide no lang or folder name value as options when you want to translate a string.
  First You have to add a default translation folder and a default lang in your package.json:
  "folder" : the default folder where your translation files will be located.
  "lang" : the default language when you don't specify any lang parameter while using itranslator in your code.
  The translation folder is located at the root of your project.
  
> package.json
```json
  "translator": {
    "folder": "translation", 
    "lang": "en"
  }
```
2- Then create the same folder "translation in our example" with a file in it.

## Basic use
If your default lang is "en" you must create a file named en.json under the default folder "translation" :

> [base_path]/translation/en.json
```json
  {
    "my": {
      "test": "my test"
    }
  }
```
```node
    const trans = require('itranslator')
    trans('my.test'); // "my test" 
```
## Advanced use
If you want to deal with variables you can perform that by passing an object like below :

> [base_path]/translation/en.json
```json
  {
    "info": {
      "yourEmail": "your email is : %email%"
    }
  }
```
```node
    const trans = require('itranslator')
    trans('info.yourEmail',{email: "imamharir@gmail.com"}); // "your email is : imamharir@gmail.com" 
```
In case you want to override the translation lang and/or folder:

> [base_path]/mytranslation/fr.json
```json
  {
    "info": {
      "yourEmail": "votre email est : %email%"
    }
  }
```
```node
    const trans = require('itranslator')
    const vars = {email: "imamharir@gmail.com"};
    //you must create the folder "mytranslation" with subfile "fr.json" at root 
    const options = {folder: "mytranslation", lang:"fr"}
    trans('info.yourEmail', vars, options); // "votre email est : imamharir@gmail.com" 
```
