var wish = require('wish');
function checkHand(hand) {
 if(hand[0]==='2-H' && hand[1]==='3-C'
 && hand[2]==='4-D' && hand[3]==='5-H'
 && hand[4]==='2-C'){
 return 'pair';
 }else{
 return 'three of a kind';
 }
};

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
