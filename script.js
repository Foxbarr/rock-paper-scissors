//variable declaration
var items = ["rock", "paper", "scissors"];
let win = 0;
let lose = 0;
let tie = 0;
let maxScore = 5;



//getting computer choice
function getComputerChoice(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


//function to play one round and output result
function round(){
    let playerSelection = prompt("Please type in your choice!", "Choice").toLowerCase();
    let computerSelection = getComputerChoice(items);


    if(playerSelection == computerSelection)
    {
        console.log("It's a Tie!");
        return tie++;
    }
    else if(playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissors")
    {
        console.log("You win!");
        return win++;
    }
    else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose!");
        return lose++;
    }
}

//function to run game 5 times
function game(){

    for (let i = 0; i < 5; i++) {
        if (i == 0){
            round();
            
        } 
        if (i == 1){
            round();            
        } 
        if (i == 2){
            round();            
        } 
        if (i == 3){
            round();            
        } 
        if (i == 4){
            round();            
        } 
    }

    console.log("Wins: " + win);
    console.log("Losses: " + lose);
    console.log("Ties: " + tie);
    }
    
game();




