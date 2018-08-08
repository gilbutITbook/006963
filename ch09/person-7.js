class Person{
  constructor(knowsBinary){
    this.knowsBinary = knowsBinary;
  };
  log(number){ console.log(this.whatIs(number)) };
  whatIs(number){
    if(this.knowsBinary){
      return Number('0b' + number);
    } else{
      return number;
    }
  };
};

const personOne = new Person(true);
const personTwo = new Person(false);

[personOne, personTwo].forEach(person => { person.log(10) });
