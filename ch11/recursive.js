function find(toFind, array){
  let found = "not found";
  array.forEach((element) => {
    if(element == toFind){
      found = "found";
    };
  });
  return found;
};
console.log(find(3, [3, 9, 2])); // 결과: found
console.log(find(3, [2, 9, 3])); // 결과: found
console.log(find(3, [2, 9, 2])); // 결과: not found
