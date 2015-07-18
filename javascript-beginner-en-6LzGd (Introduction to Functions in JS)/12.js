// Write your function below. 
// Don't forget to call your function!

var sleepCheck = function (numHours) {
    if ( numHours >= 8 ) {
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else
    {
        return "Get some more shut eye!";
    };
};

console.log(sleepCheck(10));
console.log(sleepCheck(5));
console.log(sleepCheck(8));
