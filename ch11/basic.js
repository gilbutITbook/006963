const test = require('tape');
const testdouble = require('testdouble');
var x;

function add(addend1, addend2){
  return addend1 + addend2;
};

function setGlobalFromAddition(addend1, addend2){
  x = add(addend1, addend2);
}

function readAddition(addend1, addend2, done){
  console.log(add(addend1, addend2));
  done();
}

test('addition', (assert) => {
  assert.equal(add(2, 3), 5);
  assert.end();
});

test('setting global', (assert) => {
  setGlobalFromAddition(2, 3);
  assert.equal(x, 5);
  assert.end();
});

test('setting global again', (assert) => {
  setGlobalFromAddition(2, 8);
  assert.equal(x, 10);
  assert.end();
});

test('calling console', (assert) => {
  testdouble.replace(console, 'log');
  readAddition(2, 3, () => {
    testdouble.verify(console.log(5));
    assert.pass();
    testdouble.reset();
    assert.end();
  });
});
