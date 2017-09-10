var ffi = require('ffi');
var ref = require('ref');

var platform = process.platform;
var cbtestlib = null;

if (platform === 'win32'){
    cbtestlib = './build/Release/cbtest.dll';
}else if(platform === 'linux'){
    cbtestlib = './build/Release/cbtest.so';
}else if(platform === 'darwin'){
    cbtestlib = './build/Release/cbtest.dylib'
}else{
    throw new Error('unsupported plateform for cbtestlib')
}

var cbtest = ffi.Library(cbtestlib, {
    "callme": ['void', ['pointer']]
});

module.exports = cbtest;