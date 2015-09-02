/**
 * Created by timfulmer on 9/2/15.
 */
var env=process.env.NODE_ENV || 'development',
  fs=require('fs'),
  configJson=void 0,
  configJsonPath=void 0;
try{
  fs.statSync('./config.json');
  configJson=require('./config.json');
  configJsonPath='./config.json';
}catch(err){
  console.log('No config.json found, attempting to use defaults in config.json-orig');
  configJson=require('./config.json-orig');
  configJsonPath='./config.json-orig';
}
if(!configJson[env]){
  throw new Error('Could not find config for environment '+env+' in config JSON '+configJsonPath+'.');
}
module.exports=configJson[env];