class Person{}

class BinaryKnower extends Person{
  log(number){
    console.log(this.whatIsInBinary(number));
  };
  whatIsInBinary(number){
    return Number('0b' + number);
  };
};

class BinaryOblivious extends Person{
  log(number){
    console.log(this.whatIs(number));
  };
  whatIs(number){
    return number;
  }
};
const personOne = new BinaryKnower();
const personTwo = new BinaryOblivious();
[personOne, personTwo].forEach(person => person.log(10));
