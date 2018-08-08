var checkHand = function(){
 return 'pair';
};
var wish = require('wish');
wish(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C'])==='pair');
wish(checkHand(['3-H','3-C','3-D','5-H','2-H'])==='three of a kind');
