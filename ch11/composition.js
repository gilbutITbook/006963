_ = require('lodash');
const square = (thing) => thing * thing;
R = require('ramda');
console.log(R.map(square, R.map(square, [2, 4, 5])));
