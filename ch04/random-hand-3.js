var s = ['H', 'D', 'S', 'C'];
var v = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var c = [];
var rS = function(){
  return s[Math.floor(Math.random()*(s.length))];
};
var rV = function(){
  return v[Math.floor(Math.random()*(v.length))];
};
var rC = function(){
 return rV() + '-' + rS();
};

var doIt = function(){
  c.push(rC());
  c.push(rC());
  c.push(rC());
  c.push(rC());
  c.push(rC());
};
doIt();
console.log(c);

const wish = require('wish');
describe('doIt()', function() {
  it('returns something', function() {
    wish(doIt(), true);
  });
});
describe('rC()', function() {
  it('returns something', function() {
    wish(rC(), true);
  });
});
describe('rV()', function() {
  it('returns something', function() {
    wish(rV(), true);
  });
});
describe('rS()', function() {
  it('returns something', function() {
    wish(rS(), true);
  });
});

