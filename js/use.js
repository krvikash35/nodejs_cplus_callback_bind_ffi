var ffi = require('ffi');
var cbtest = require('./callme');

var callback = function(){
    console.log('hello');
}


var ffiCallback = ffi.Callback('void', [], callback);
cbtest.callme(ffiCallback);