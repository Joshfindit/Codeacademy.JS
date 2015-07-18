userChoice = prompt("Do you choose rock, paper or scissors?");

computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice < 0.33 ) {
    computerChoice = "rock";
}
else if (0.33 < computerChoice && computerChoice < 0.66 )
{
    computerChoice = "paper";
}
else if ( computerChoice > 0.66 )
{
    computerChoice = "scissors";
}
else
{
}

console.log(computerChoice);
