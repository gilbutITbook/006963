var wish = require('wish');
var deepEqual = require('deep-equal');

function isPair(hand){
 return multiplesIn(hand) === 2;
};


function checkHand(hand) {
  if(isPair(hand)){
    return 'pair';
  }else if(isTriple(hand)){
    return 'three of a kind';
  }else if(isQuadruple(hand)){
    return 'four of a kind';
  }else if(isFlush(hand)){
    return 'flush';
  }else{
    return 'high card';
  }
};


function isQuadruple(hand){
  return multiplesIn(hand) === 4;
};


function isTriple(hand){
  return multiplesIn(hand) === 3;
};



function multiplesIn(hand){
 return highestCount(valuesFromHand(hand));
};

function highestCount(values){ };

function valuesFromHand(hand){
 return hand.map(function(card){
 return card.split('-')[0];
 })
}

function isFlush(hand){
  return allTheSameSuit(suitsFor(hand));
};

function allTheSameSuit(suits){
  suits.forEach(function(suit){
    if(suit !== suits[0]){
      return false;
    }
  })
  return true;
}

function suitsFor(hand){
  return hand.map(function(card){
    return card.split('-')[1];
  })
};




describe('allTheSameSuit()', function() {
  it('reports true if elements are the same', function() {
    var result = allTheSameSuit(['D', 'D', 'D', 'D', 'D']);
    wish(result);
  });
});








describe('valuesFromHand()', function() {
  it('returns just the values from a hand', function() {
    var result = valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
    wish(deepEqual(result, ['2', '3', '4', '5', '2']));
  });
});




function highestCount(values){
  var counts = {};
  values.forEach(function(value, index){
    counts[value]= 0;
    if(value == values[0]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[1]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[2]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[3]){
      counts[value] = counts[value] + 1;
    };
    if(value == values[4]){
      counts[value] = counts[value] + 1;
    };
  });
  var totalCounts = Object.keys(counts).map(function(key){
    return counts[key];
  });
  return totalCounts.sort(function(a,b){return b-a})[0];
};






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

   it('handles four of a kind', function() {
    var result = checkHand(['3-H', '3-C', '3-D', '3-S', '2-H']);
    wish(result === 'four of a kind');
  });

   it('handles high card', function() {
    var result = checkHand(['2-H', '5-C', '9-D', '7-S', '3-H']);
    wish(result === 'high card');
  });

   it('handles flush', function() {
  var result = checkHand(['2-H', '5-H', '9-H', '7-H', '3-H']);
  wish(result === 'flush');
});



});
