R = require('ramda');
const square = (thing) => thing * thing;

const mapSquares = R.map(square);
console.log(mapSquares([2, 4, 5]));

console.log(R.map(square, [2, 4, 5]));
