const http = require('http');
const getBody = {
  bodyArray: [],
  saveBody: function(chunk){
    this.bodyArray.push(chunk);
  },
  printBody: function(){
    console.log(this.bodyArray.join(''))
  },
  getResult: function(result){
    result.on('data', this.saveBody.bind(this));
    result.on('end', this.printBody.bind(this));
  }
};

http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));

const test = require('tape');
test('our async routine', function(assert){
  http.get('http://refactoringjs.com',
           getBody.getResult.bind(getBody));
  setTimeout(() => {
    assert.notEqual(getBody.bodyArray.length, 0);
    assert.end();
  }, 3000);
});
