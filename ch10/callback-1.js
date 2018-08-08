function two(callback){
 callback(2);
};
two((addend) => console.log(addend + 1));
