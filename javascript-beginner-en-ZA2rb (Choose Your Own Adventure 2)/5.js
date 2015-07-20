var user = prompt("What question should we ask?").toUpperCase();

switch(user) {
    case "NONE":
        console.log("Ok");
        break;
    case "HOW ABOUT THAT WEATHER?":
        console.log("The weather? No. I refuse.");
        break;
    case "HOW ABOUT THAT LOCAL SPORTS TEAM?":
        console.log("You're not trying very hard");
        break;
    case "WHERE ARE MY PANTS?":
        console.log("Pants are irrelevant.");
        break;
    default:
        console.log(user + "?!?");
        if(user === "HELLO" || user === "HI") {
            console.log("Bonjour.");
        } else if (user === "HELLO" && user === "GOODBYE") {
            console.log("If you see this, you are hacking.");
        }
}
