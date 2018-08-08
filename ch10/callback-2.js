function two(callback){
 callback(2);
};
function addOne(addend){
 console.log(addend + 1);
};
two(addOne);
