function log(person, number){ 
  console.log(person.whatIs(number));
};
class BinaryKnower{ whatIs(number){ return Number('0b' + number) } };
class BinaryOblivious{ whatIs(number){ return number } };
const personOne = new BinaryKnower();
const personTwo = new BinaryOblivious();
[personOne, personTwo].forEach(person => { log(person, 10) });
