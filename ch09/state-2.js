class Person{
  constructor(binaryKnowledge){
    this.binaryKnowledge = binaryKnowledge;
  }
};

const binaryAwareness = {
  read(number){
    return Number('0b' + number);
  },
  and(numberOne, numberTwo){
    return numberOne & numberTwo;
  },
  xor(numberOne, numberTwo){
    return numberOne ^ numberTwo;
  }
};

const binaryObliviousness = {
  read(number){
    return number;
  },
  and(numberOne, numberTwo){
    return "unknown";
  },
  xor(number){
    return "unknown";
  }
};


const personOne = new Person(binaryAwareness);
const personTwo = new Person(binaryAwareness);
personTwo.binaryKnowledge.read = () => `
redefined on both objects`;

[personOne, personTwo].forEach(person => {
  console.log(person.binaryKnowledge.read(10));
});

