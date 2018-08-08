_ = require('lodash');
const square = (thing) => thing * thing;
const mapSquares = _.map(square);
console.log(_.map([2, 4, 5], square));
console.log(_.map(square, [2, 4, 5]));
