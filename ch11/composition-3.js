_ = require('lodash');
const square = (thing) => thing * thing;
R = require('ramda');
const fourthPower = R.compose(square, square);

const mapFourthPower = R.map(fourthPower);
console.log(mapFourthPower([2, 4, 5]));


