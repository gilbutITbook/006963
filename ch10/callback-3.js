function three(callback){
 setTimeout(function(){
  callback(3);
 },
 500);
};
three(addOne);
