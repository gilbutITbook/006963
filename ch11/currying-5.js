R = require('ramda');

function add(numberOne, numberTwo){
  return numberOne + numberTwo;
};

const curriedAdd = R.curry(add);

console.log(curriedAdd(1));
console.log(curriedAdd(1)(2));
console.log(curriedAdd(1, 2));

const increment = curriedAdd(1);
console.log(increment(3));

const square = (thing) => thing * thing;
console.log([2, 4, 5].map(square));
