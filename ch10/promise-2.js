Promise.resolve()
.then(() => 4)
.then(() => 6)
.then(console.log);



function addOne(addend){
  return Promise.resolve(addend + 1);
};

function four(){
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(4), 500);
  });
};
