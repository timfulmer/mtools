/**
 * Created by timfulmer on 7/4/15.
 */
var config=require('./config'),
  restify=require('./restify'),
  waterline=require('./waterline'),
  passport=require('./passport');

module.exports=waterline(config)
  .then(passport)
  .then(restify)
  .catch(function(err){
    console.log('Caught error running server:\n%s.',err.stack);
    process.exit(-1);
  });
