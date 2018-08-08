function addOne(addend, callback){
  callback(addend + 1);
};
function three(callback){
  setTimeout(function(){
    callback(3, console.log);
    },
    500);
};
three(addOne);
