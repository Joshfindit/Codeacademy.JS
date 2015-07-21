function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit.");
    };
}

// now we can easily make all of our rabbits

rabbit1 = new Rabbit("fluffy");
rabbit2 = new Rabbit("happy");
rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();
