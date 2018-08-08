class Person{
  constructor(binaryKnowledge){
    this.binaryKnowledge = binaryKnowledge;
  };
  change(binaryKnowledge){
    this.binaryKnowledge = binaryKnowledge;
  };
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
  },
  forget(person){
    person.change(binaryObliviousness);
  }
}
const binaryObliviousness = {
  read(number){
    return number;
  },
  and(numberOne, numberTwo){
    return "unknown";
  },
  xor(number){
    return "unknown";
  },
  learn(person){
    person.change(binaryAwareness);
  }
};

const personOne = new Person(binaryAwareness);
const personTwo = new Person(binaryObliviousness);

[personOne, personTwo].forEach(person => {
  console.log(person.binaryKnowledge.read(10));
  console.log(person.binaryKnowledge.and(2, 3));
  console.log(person.binaryKnowledge.xor(2, 3));
});

personOne.binaryKnowledge.forget(personOne);
personTwo.binaryKnowledge.learn(personTwo);

[personOne, personTwo].forEach(person => {
  console.log(person.binaryKnowledge.read(10));
  console.log(person.binaryKnowledge.and(2, 3));
  console.log(person.binaryKnowledge.xor(2, 3));
});
