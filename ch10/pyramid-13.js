const http = require('http');
const getBody = {
  bodyArray: [],
  saveBody: function(chunk){
    this.bodyArray.push(chunk);
  },
  printBody: function(){
    console.log(this.bodyArray.join(''))
    this.allDone();
  },
  allDone: function(){},
  getResult: function(result){
    result.on('data', this.saveBody.bind(this));
    result.on('end', this.printBody.bind(this));
  }
};

http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));

const test = require('tape');
test('our async routine', function (assert) {
  getBody.allDone = function(){
    assert.equal(getBody.bodyArray.length, 2);
    assert.end();
  }
  http.get('http://refactoringjs.com',
           getBody.getResult.bind(getBody));
});

const testDouble = require('testdouble');

// function setup(){
//   getBody.bodyArray = [];
// }
function teardown(){
  getBody.allDone = function(){ };
}
function setup(){
  return Object.create(getBody);
};

test('our async routine', function (assert) {
  const newBody = setup();
  newBody.allDone = testDouble.function();
  testDouble.when(newBody.allDone()).thenDo(function(){
    assert.notEqual(newBody.bodyArray.length, 0)
    assert.end()
  });
  http.get('http://refactoringjs.com',
           newBody.getResult.bind(newBody));
});


test('our async routine two', function (assert) {
  setup();
  http.get('http://refactoringjs.com',
           getBody.getResult.bind(getBody));
  assert.equal(getBody.bodyArray.length, 0);
  teardown();
  assert.end();
});



