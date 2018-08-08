_ = require('lodash');
const square = (thing) => thing * thing;
R = require('ramda');
const fourthPower = R.compose(square, square);
console.log(R.map(fourthPower, [2, 4, 5]));


