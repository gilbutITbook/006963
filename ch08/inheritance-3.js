const barky = {
  bark(){ console.log('woof woof')}
};
const bitey = {
  bark(){ console.log('grrr')},
  bite(){ console.log('real bite')}
};
const animal = {
  beFluffy(){ console.log('fluffy')},
  bite(){ console.log('normal bite')}
};
const myPet = Object.assign(Object.create(animal), barky, bitey);
myPet.beFluffy();
myPet.bark();
myPet.bite();

console.log(myPet);
console.log(Object.getPrototypeOf(myPet));

animal.beFluffy = function(){ console.log('not fluffy')}
myPet.beFluffy();
// "not fluffy" 출력

animal.hasBankAccount = false;
console.log(myPet.hasBankAccount); // false 출력

bitey.bite = function(){
 console.log("don't bite");
}
myPet.bite();
// "real bite" 출력
