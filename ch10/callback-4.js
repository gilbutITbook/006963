function three(){
  setTimeout(function(){
    return 3
    },
    500);
}
function addOne(addend){
  console.log(addend + 1);
};
addOne(three());
