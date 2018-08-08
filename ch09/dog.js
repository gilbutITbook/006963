class Dog{
  constructor(){
    this.cost = 50;
  }
  displayPrice(){
    return `The dog costs $${this.cost}.`;
  }
};

const test = require('tape');
test("base dog price", (assert) => {
  assert.equal((new Dog).displayPrice(), 'The dog costs $50.');
  assert.end();
});
