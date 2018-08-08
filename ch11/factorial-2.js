function memoizedFactorial(number, lookupTable = {}){
  if(number in lookupTable){
    console.log("cached");
    return lookupTable[number];
  }
  else{
    console.log("calculating");
    var reduceValue;
    if(number < 2){
      reduceValue = 1;
    } else {
      reduceValue = 
        number * (memoizedFactorial(number - 1, lookupTable))['result'];
    };
    lookupTable[number] = reduceValue;
    return {result: reduceValue, lookupTable: lookupTable};
  }
};
console.log(memoizedFactorial(10)['result']);
console.log(memoizedFactorial(10)['result']);
