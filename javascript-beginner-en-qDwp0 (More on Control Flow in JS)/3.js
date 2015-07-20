var condition = true;

for (var i = 3; i <= 300; i += 12) {
    console.log(i);
}

while (condition) {
    var rollDice = Math.round(Math.random());
    
    if (rollDice) {
        console.log("You randomly win! If you had lost, your browser would be on an infinite loop right now.");
        condition = false;
    } else {
        console.log("You lost this roll. Let's do another");
    }
}
