function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("Sally's species is " + sally.species + " and she is " + sally.age );
console.log("Holden's species is " + holden.species + " and he is " + holden.age );
