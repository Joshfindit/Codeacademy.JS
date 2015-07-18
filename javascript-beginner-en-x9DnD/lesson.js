// Check if the user is ready to play!

confirm("Press OK when you are ready!");

var age = prompt("What's your age?");

if (age >= 13) {
    console.log("Play on!");
}
else {
    console.log("You're too young for Bieber. Go away!");
}

var scene1 = "You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'";
var beiberQuestion1 = "Suddenly, Bieber stops and says, 'Who wants to race me?'"

console.log(scene1);
console.log(beiberQuestion1);
var userAnswer = prompt ("Do you want to race Bieber on stage?");

if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

var feedback = prompt("Please rate this game, from 1 - 10");

if (feedback >= 8) {
    console.log("Thank you! We should race at the next concert!");
} else {
    console.log("I'll keep practicing coding and racing.");
}
