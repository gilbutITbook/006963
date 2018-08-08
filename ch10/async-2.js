const http = require('http');
let theResult = [];
http.get('http://refactoringjs.com', (result) => {
  result.on('data', (chunk) => {
    theResult.push(chunk.toString());
  });
});
console.log(theResult);

