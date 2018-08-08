class AnObject{
  constructor(){
    this.number = 5;
    this.getNumber = function(){return this.number}
  }
}
anObject = new AnObject;
console.log(anObject.getNumber());
