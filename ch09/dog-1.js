const test = require('tape');
const wish = require('wish');

class Dog{
  constructor(){
    this.cost = 50;
  }
  displayPrice(){
    return `The dog costs $${this.cost}.`;
  }
};

test("base dog price", (assert) => {
  wish((new Dog).displayPrice() 
=== 'The dog costs $50.');
  assert.pass();
  assert.end();
});
