const {create, env} = require('sanctuary');
const S = create({checkTypes: false, env: env});

class Person {
  constructor(name){
    this.name = S.Just(name);
  }
};
class AnonymousPerson extends Person {
  constructor(){
    super();
    this.name = S.Nothing();
  }
};
const capitalize = (string) => string[0].toUpperCase()
                               + string.substring(1);
const tigerify = (string) => `${string}, the tiger`;
const display = (string) => string.toString();
