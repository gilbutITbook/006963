const http = require('http');
let bodyArray = [];
const saveBody = function(chunk){
  bodyArray.push(chunk);
};
const printBody = function(){
  console.log(bodyArray.join(''))
};
const getResults = function(result){
  result.on('data', saveBody);
  result.on('end', printBody);
};

http.get('http://refactoringjs.com', getResults);
