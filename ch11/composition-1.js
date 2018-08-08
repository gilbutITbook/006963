_ = require('lodash');
const square = (thing) => thing * thing;
R = require('ramda');
function fourthPower(thing){
 return square(thing) * square(thing);
};
console.log(R.map(fourthPower, [2, 4, 5]));

