function log(fun, number){ 
  console.log(fun(number));
};
function whatIsInBinary(number){return Number('0b' + number)};
function whatIs(number){return number};

[whatIsInBinary, whatIs].forEach(fun => { log(fun, 10) });
