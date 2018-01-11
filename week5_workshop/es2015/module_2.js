
// ES5 - CommonJS
var math = require('lib/math');
console.log('2π = ' + math.sum(math.pi, math.pi));



// ES6
import math from 'lib/math';
console.log('2π = ' + math.sum(math.pi, math.pi));