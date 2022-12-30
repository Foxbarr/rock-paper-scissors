//variable declaration
var items = ["rock", "paper", "scissors"];


//getting computer choice
function getComputerChoice(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


//function to play one round and output result
function round(){
    let playerSelection = prompt("Please type in your choice!", "Choice").toLowerCase();
    let computerSelection = getComputerChoice(items);
    let win = 0;
    let lose = 0;
    let tie = 0;
    let result1 = '';
    let result2 = '';
    let result3 = '';

    if(playerSelection === computerSelection){
        result3 = tie++;
        console.log("It's a tie!");
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        result1 = win++;
        console.log("You Win! Paper beats rock");
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        result1 = win++;
        console.log("You Win!, Scissors beats paper");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        result1 = win++;
        console.log("You Win! Rock beats Scissors");
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        result2 = lose++;
        console.log("You lose! Paper beats Rock");
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        result2 = lose++;
        console.log("You lose! Scissors beats paper");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        result2 = lose++;
        console.log("You lose! Rock beats Scissors");
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
    }
    
game();


