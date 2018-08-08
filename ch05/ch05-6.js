var anObject =
    Object.create(null, {"number": {value: 5},
    "getNumber": {value: function(){return this.number}}});
console.log(anObject.getNumber());
