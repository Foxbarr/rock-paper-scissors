function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["Rock", "Paper", "Scissors"];
let playerSelection = prompt("Please type in your choice!", "Choice");
let computerSelection = random_item(items);

function round(){
    
}