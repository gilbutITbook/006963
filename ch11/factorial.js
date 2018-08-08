function factorial(number){
  if(number < 2){
    return 1;
  } else {
    return(number * factorial(number - 1));
  }
};
factorial(3); // 6 반환
