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
    if(playerSelection == computerSelection)
    {
        tie++;
        //tieScore.textContent = 'Ties: ' + tie;
        resultDisplay.textContent = "It's a tie!";           
        return tie;
    }
    else if(playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissors")
    {
        win++;
        winScore.textContent = 'Player Score: ' + win;
        resultDisplay.textContent = "You Win! " + playerSelection + " beats " + computerSelection;

            if(win == maxScore){
                resultDisplay.textContent = "You won the game! Refresh the page to play again.";
                buttonRock.removeEventListener('click', round);
                buttonPaper.removeEventListener('click', round);
                buttonScissors.removeEventListener('click', round);
            }
            else{return;}
        return;    
    }
    else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock")
    {
        lose++;
        loseScore.textContent = 'Computer Score: ' + lose;
        resultDisplay.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        if(lose == maxScore){
            resultDisplay.textContent = "You lost the game! Refresh the page to play again.";
            buttonRock.removeEventListener('click', round);
            buttonPaper.removeEventListener('click', round);
            buttonScissors.removeEventListener('click', round);}
        else{return;}
        return;
    }

    
    }
    
//displaying result on screen
const gameResult = document.querySelector('#result');

const resultDisplay = document.createElement('h3');

gameResult.appendChild(resultDisplay);


//adding buttons to screen
const container = document.querySelector('#container');


const buttonRock = document.createElement('button');
buttonRock.setAttribute("class", "buttons");
buttonRock.textContent = "Rock";
buttonRock.addEventListener('click', function() { playerSelection = playerOptions[0];});
buttonRock.addEventListener('click', round);

const buttonPaper = document.createElement('button');
buttonPaper.setAttribute("class", "buttons");
buttonPaper.textContent = "Paper";
buttonPaper.addEventListener('click', function(){playerSelection = playerOptions[1];});
buttonPaper.addEventListener('click', round);

const buttonScissors = document.createElement('button');
buttonScissors.setAttribute("class", "buttons");
buttonScissors.textContent = "Scissors";
buttonScissors.addEventListener('click', function(){playerSelection = playerOptions[2];});
buttonScissors.addEventListener('click', round);

container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);

//adding scoreline to screen
const scoreline = document.querySelector('#scoreline');

//const tieScore = document.createElement('h3');
//tieScore.textContent = 'Ties: ' + tie;

const winScore = document.createElement('h3');
winScore.textContent = 'Player Score: ' + win;

const loseScore = document.createElement('h3');
loseScore.textContent = 'Computer Score: ' + lose;

//scoreline.appendChild(tieScore);
scoreline.appendChild(winScore);
scoreline.appendChild(loseScore);

