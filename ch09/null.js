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
