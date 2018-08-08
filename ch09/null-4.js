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

function capitalize(string) {
  if(string === null){
    return null;
  }else{
    return string.charAt(0).toUpperCase() + string.substring(1);
  }
};

function tigerify(string) {
 return `${string}, the tiger`;
};
console.log(tigerify(capitalize(personOne.name)));
console.log(tigerify(capitalize(personTwo.name)));


