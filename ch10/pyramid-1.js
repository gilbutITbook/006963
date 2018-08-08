const http = require('http');
function printBody(chunk){
  console.log(chunk.toString());
};

http.get('http://refactoringjs.com', (result) => {
  result.on('data', printBody);
});
