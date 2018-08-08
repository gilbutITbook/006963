class Person{
 constructor(whatIs){ this.whatIs = whatIs }
 log(number){console.log(this.whatIs(number)) }
};
const personOne = new Person(number => Number('0b' + number));
const personTwo = new Person(number => number);

[personOne, personTwo].forEach(person => { person.log(10) });
