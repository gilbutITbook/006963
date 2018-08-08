_ = require('lodash');
const square = (thing) => thing * thing;
R = require('ramda');
const fourthPower = R.compose(square, square);

const mapFourthPower = R.map(fourthPower);
console.log(mapFourthPower([2, 4, 5]));

const printFourthPower = R.compose(console.log, square, square);
R.map(printFourthPower, [2, 4, 5]);

// map은 커링되었기 때문에, 이 코드도 작동합니다.
R.map(printFourthPower) ([2, 4, 5]);



