const http = require('http');
http.get('http://refactoringjs.com', (result) => {
  result.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});
