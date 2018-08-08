const {create, env} = require('sanctuary');
const S = create({checkTypes: true, env: env});
S.add("hello", 3);
console.log(S.add('hello', 3))