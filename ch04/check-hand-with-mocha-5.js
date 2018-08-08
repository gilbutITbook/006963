var wish = require('wish');

function isPair(hand){
 return multiplesIn(hand) === 2;
};


function checkHand(hand) {
 if(isPair(hand)){
  return 'pair';
 }else{
return 'three of a kind';
 }
};

describe('isPair()', function() {
 it('finds a pair', function() {
 var result = isPair(['2-H', '3-C', '4-D', '5-H', '2-C']);
 wish(result);
 });
}); 

describe('checkHand()', function() {
 it('handles pairs', function() {
   var result = checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
   wish(result === 'pair');
   var anotherResult = checkHand(['3-H', '3-C', '4-D', '5-H', '2-C']);
   wish(anotherResult === 'pair');
 });
 it('handles three of a kind', function() {
   var result = checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']);
   wish(result === 'three of a kind');
 });
});
