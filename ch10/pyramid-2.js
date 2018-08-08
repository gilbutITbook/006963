const http = require('http');
function printBody(chunk){
  console.log(chunk.toString());
};

function getResults(result){
  result.on('data', printBody);
};

http.get('http://refactoringjs.com', getResults);
