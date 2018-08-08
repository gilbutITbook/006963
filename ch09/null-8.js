// null 객체와 함께
class Person {
  constructor(name){
    this.name = new NameString(name);
  }
};

class AnonymousPerson extends Person {
  constructor(){
    super();
    this.name = new NullString;
  }
};

class NullString{
  capitalize(){
    return this; // 이 경우, new NullString과 동일
  };
  tigerify() {
    return this; // 이 경우, new NullString과 동일
  };
  display() {
    return '';
  };
};

class NameString extends String{
  capitalize() {
    return new NameString(this[0].toUpperCase() + this.substring(1));
  };
  tigerify() {
    return new NameString(`${this}, the tiger`);
  };
  display(){
    return this.toString();
  };
}

personOne = new Person("tony");
personTwo = new AnonymousPerson("tony");
console.log(personOne.name.capitalize().tigerify().display());
console.log(personTwo.name.capitalize().tigerify().display());
