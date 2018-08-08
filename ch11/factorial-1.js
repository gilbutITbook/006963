const lookupTable = {};
function memoizedFactorial(number){
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
      reduceValue = number * memoizedFactorial(number - 1);
    }
    lookupTable[number] = reduceValue;
    return reduceValue;
  }
};
console.log(memoizedFactorial(10)); // 10번 계산
console.log(memoizedFactorial(10)); // 1번 캐싱됨
console.log(memoizedFactorial(11)); // 한 번 계산 되고 캐싱됨
