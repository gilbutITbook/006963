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

function multiplesIn(hand){
 return highestCount(valuesFromHand(hand));
};

function highestCount(values) {};

function valuesFromHand(hand) {};

describe('valuesFromHand()', function() {
 it('returns just the values from a hand', function() {
  var result = valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
  wish(result === ['2', '3', '4', '5', '2']);
 }); });

describe('highestCount()', function() {
 it('returns count of the most common card from array',
  function() {
   var result = highestCount(['2', '4', '4', '4', '2']);
   wish(result === 3);
  }
 );
});

describe('multiplesIn()', function() {
 it('finds a duplicate', function() {
 var result = multiplesIn(['2-H', '3-C', '4-D', '5-H', '2-C']);
 wish(result === 2);
 });
});




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
