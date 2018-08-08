function coinToss(){
  return Math.random() > .5;
};


class Agent{
 constructor(name, type){
 this.name = name;
 this.type = type;
 };
};

class User extends Agent{
 constructor(name, type){
   super();
   this.name = name;
   this.type = type;
 };
 sayName(){
   return `my name is ${this.name}`;
 };
}
class Project extends Agent{
 constructor(name, type){
   super();
   this.name = name;
   this.type = type;
 };
 sayTheName(){
   return `the project name is ${this.name}`;
 };
};


let agent;
if(coinToss()){
 agent = new Agent('name', 'user');
}else{
 agent = new Agent('name', 'project');
}

// const agent = new Agent('name');
const projectOrUser = Agent.makeProjectOrUser(agent);

const wish = require('wish');
if(projectOrUser.type === 'user'){
 wish(projectOrUser.sayName() === "my name is name");
}else{
 wish(projectOrUser.sayTheName() === "the project name is name");
}

