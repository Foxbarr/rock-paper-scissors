//variable declaration
let tie = 0;
let win = 0;
let lose = 0;
let maxScore = 5;
let computerSelection = getComputerChoice();
let playerSelection;
const playerOptions = ["rock", "paper", "scissors"];


//getting computer choice
function getComputerChoice()
{
    const items = ["rock", "paper", "scissors"];
return items[Math.floor(Math.random()*items.length)];
     
}


//function to play one round and output result
function round(){
    

    buttonRock.onclick = function(){
        playerSelection = playerOptions[0];
    };
    buttonPaper.onclick = function(){
        playerSelection = playerOptions[1];
    };
    buttonScissors.onclick = function(){
        playerSelection = playerOptions[2];
    };

    if(playerSelection == computerSelection)
    {
        tie++;
        tieScore.textContent = 'Ties: ' + tie;
        return tie;
    }
    else if(playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissors")
    {
        win++;
        winScore.textContent = 'Player Score: ' + win;
        return win;
    }
    else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock")
    {
        lose++;
        loseScore.textContent = 'Computer Score: ' + lose;
        return lose;
    }

 
}




//adding buttons to screen
const container = document.querySelector('#container');


const buttonRock = document.createElement('button');
buttonRock.textContent = "Rock";
buttonRock.addEventListener('click', round);

const buttonPaper = document.createElement('button');
buttonPaper.textContent = "Paper";
buttonPaper.addEventListener('click', round);

const buttonScissors = document.createElement('button');
buttonScissors.textContent = "Scissors";
buttonScissors.addEventListener('click', round);

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);

//adding scoreline to screen
const scoreline = document.querySelector('#scoreline');

const tieScore = document.createElement('h3');
tieScore.textContent = 'Ties: ' + tie;

const winScore = document.createElement('h3');
winScore.textContent = 'Player Score: ' + win;

const loseScore = document.createElement('h3');
loseScore.textContent = 'Computer Score: ' + lose;

scoreline.appendChild(tieScore);
scoreline.appendChild(winScore);
scoreline.appendChild(loseScore);

