function find(toFind, array){
  if (array[0] === toFind) {
    return "found";
  } else if(array.length === 0){
    return "not found";
  } else{
    return find(toFind, array.slice(1));
  }
};
console.log(find(3, [3, 9, 2])); // 결과: found
console.log(find(3, [2, 9, 3])); // 결과: found
console.log(find(3, [2, 9, 2])); // 결과: not found
