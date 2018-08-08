_ = require('lodash');
const square = (thing) => thing * thing;
R = require('ramda');
var factorial = R.memoize(n => R.product(R.range(1, n + 1)));
var printFact = R.compose(console.log, factorial);
printFact(3);

// 위 코드는 다음 코드와 같습니다.
var factorial = R.memoize(n => R.product(R.range(1, n + 1)));
var printFactPipe = R.pipe(factorial, console.log);
printFactPipe(3); 
