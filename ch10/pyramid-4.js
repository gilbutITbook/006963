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
    result.on('data', this.saveBody);
    result.on('end', this.printBody);
  }
};

http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));