var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    if (youHit) {
        console.log("You hit the dragon!");
    } else {
        console.log("You swing at the dragon and miss. Your momentum carries you right in to the path of it's claws and you are no more.");
        slaying = false;
    }
    
    slaying = false;
}
