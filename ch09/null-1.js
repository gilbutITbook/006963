class Person {
  constructor(name){
    this.name = name;
  }
};
class AnonymousPerson extends Person {
  constructor(){
    super();
    this.name = null;
  }
};

personOne = new Person("tony");
personTwo = new AnonymousPerson("tony");
console.log(personOne.name);
console.log(personTwo.name);

function capitalize(string) {
 return string[0].toUpperCase() + string.substring(1);
};
console.log(capitalize(personOne.name));
console.log(capitalize(personTwo.name));

