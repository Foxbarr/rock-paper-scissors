//variable declaration
var items = ["rock", "paper", "scissors"];
let win = 0;
let lose = 0;
let tie = 0;


//getting computer choice
function getComputerChoice(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


//function to play one round and output result
function round(){
    let playerSelection = prompt("Please type in your choice!", "Choice").toLowerCase();
    let computerSelection = getComputerChoice(items);


    if(playerSelection === computerSelection){
        return tie++;
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return win++;
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return win++;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        return win++;
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        return lose++;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return lose++;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
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
    }
    
game();


