class Person{
  constructor(whatIs){
    this.whatIs = whatIs;
  };
  log(number){
    console.log(this.whatIs(number));
  };
  static binaryAware(number){
    return Number('0b' + number);
  };
  static binaryOblivious(number){
    return number;
  };
};

const personOne = new Person(Person.binaryAware);
const personTwo = new Person(Person.binaryOblivious);
