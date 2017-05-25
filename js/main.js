var timestamp = require('time-stamp'),
    moduleA   = require('./modules/a.js'),
    vasya     = require('./modules/vasya.js');

console.log(timestamp('YYYY/MM/DD'));
moduleA();
console.log(vasya.name);
vasya.sayHello();