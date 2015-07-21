// Our Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = [ ];
family.push(new Person("alice", 40));
family.push(new Person("bob", 42));
family.push(new Person("michelle", 8));
family.push(new Person("timmy", 6));

// loop through our new array
for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
}
