//variable declaration

let win = 0;
let lose = 0;
let tie = 0;
let maxScore = 5;
let computerSelection = getComputerChoice();
let playerSelection;



//getting computer choice
function getComputerChoice(items)
{
    var items = ["rock", "paper", "scissors"];
return items[Math.floor(Math.random()*items.length)];
     
}

function getPlayerChoice(){
    buttonRock.onclick = function(){playerSelection = "rock"};
    buttonPaper.onclick = function(){playerSelection = "paper"};
    buttonScissors.onclick = function(){playerSelection = "scissors"};
}


//function to play one round and output result
function round(){
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

function game(){
    getComputerChoice;
    getPlayerChoice;
    round;
}

const container = document.querySelector('#container');

const buttonRock = document.createElement('button');
buttonRock.textContent = "Rock";
buttonRock.addEventListener('click', game());

const buttonPaper = document.createElement('button');
buttonPaper.textContent = "Paper";
buttonPaper.addEventListener('click', game());

const buttonScissors = document.createElement('button');
buttonScissors.textContent = "Scissors";
buttonScissors.addEventListener('click', game());

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);

game();