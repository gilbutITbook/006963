_ = require('lodash');
const square = (thing) => thing * thing;
const mapSquares = _.map(square);
console.log(mapSquares([2, 4, 5]));
console.log(_.map(square, [2, 4, 5]));
