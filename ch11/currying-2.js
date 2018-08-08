function add(numberOne, numberTwo){
 return function(numberTwo){
  return numberOne + numberTwo;
 };
};

add(1, 2);
// 3
console.log(add(1)(2));