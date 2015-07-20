var answer = prompt("Do you like waffles?!");

switch(answer) {
  case 'Yes I like waffles!':
    console.log("Let's be friends!");
    break;
  case 'Yes':
    console.log("Right on! Have some waffles!");
    break;
  case 'yes':
    console.log("Here's some syrup");
    break;
  case 'y':
      console.log("Are you sure you like waffles?");
      break;
  default:
      console.log("Then shoo! This is not for you.");
  
}
