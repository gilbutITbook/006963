R = require('ramda');

function add(numberOne, numberTwo){
  return numberOne + numberTwo;
};

const curriedAdd = R.curry(add);

console.log(curriedAdd(1));
console.log(curriedAdd(1)(2));
console.log(curriedAdd(1, 2));
