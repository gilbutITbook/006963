const {create, env} = require('sanctuary');
const S = create({checkTypes: false, env: env});
R = require('ramda');
const getAThree = S.find(R.equals(3));

getAThree([3, 4]);
getAThree([8, 4]);

console.log(getAThree([3, 4]))
console.log(getAThree([8, 4]))