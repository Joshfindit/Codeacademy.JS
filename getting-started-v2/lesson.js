"Josh".length //Basic string manipulation


+3 / +4; //basic math


//potato //Confuse the interpreter


// This is a comment that the computer will ignore. 
// It is for your eyes only!
"cake".length;


confirm("Where are my pants?!");


prompt("Where are you from?");


"This is a yellow peice of text".length;


"I'm coding like a champ".length > 10;


if (prompt("What is your name?").length <= 7 ) {
    console.log( "Some names are short." );
}


if ( prompt("What is your name?").length >= 7 ) 
{
    console.log("Long name!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("Short or unknown name!");
}


if ( 1 !== 1 ) {
    console.log("The condition is true");
}
else {
    console.log("The condition is false");
}

if ("Jon".length * 2 / (2+1) === 2 )
{
    console.log("The answer makes sense!");
    console.log("Error Error Error");
} 
else 
{
    
}


console.log(14 % 3); 
console.log(99 % 8); 
console.log(11 % 3); 


if( 40000000000000 % 2 === 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}


"wonderful day".substring(3, 7);


console.log("January".substring(0, 3));
console.log("Melbourne is great".substring(0, 12));
console.log("Hamburgers".substring(3, 30));


// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "Canada";

// Use console.log to print out the length of the variable myCountry.
console.log( myCountry.length );

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3) );


// On line 2, declare a variable myName and give it your name.
myName = "Josh";

// On line 4, use console.log to print out the myName variable.
console.log(myName);

// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName = myName.substring(0,2);

// On line 9, use console.log to print out the myName variable.

console.log(myName);


var myColor = "Green";
console.log(myColor.length);
