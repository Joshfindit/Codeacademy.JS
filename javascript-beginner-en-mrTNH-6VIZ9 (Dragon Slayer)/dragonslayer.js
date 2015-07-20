var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    if (youHit) {
        console.log("You hit the dragon!");
        totalDamage += damageThisRound;
        
        if (totalDamage >=4) {
            console.log("Your efforts have paid off; your last hit slays the dragon and it falls at your feet with an earth-shaking rumble.");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You swing at the dragon and miss. Your momentum carries you right in to the path of it's claws and you are no more.");
        slaying = false;
    }    
}
