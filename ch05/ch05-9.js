var anObject = {
  number: 5
}
var anotherObject = {
  getIt: function(){ return this.number },
  setIt: function(value){ this.number = value; return this; }
}
console.log(anotherObject.setIt.call(anObject, 3));
