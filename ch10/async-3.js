const http = require('http');
http.get('http://refactoringjs.com', (result) => {
  result.on('data', (chunk) => {
    console.log('this prints after (also twice)');
  });
});
console.log('this prints first');


