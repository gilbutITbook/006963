class Person {
  constructor(name){
    this.name = name;
  }
};
class AnonymousPerson extends Person {
 constructor(){
  super();
  this.name = "";
 }
};


personOne = new Person("tony");
personTwo = new AnonymousPerson("tony");
console.log(personOne.name);
console.log(personTwo.name);

function capitalize(string) {
  if(string === null){
    return null;
  }else{
    return string.charAt(0).toUpperCase() + string.substring(1);
  }
};

console.log(capitalize(personOne.name));
console.log(capitalize(personTwo.name));

