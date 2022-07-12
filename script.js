let computerScore = 0;
let playerScore = 0;
let winner = 0;

function gameOver()
{
    let message;
    if(winner === 1)
    {
        message = `GAME OVER\nYOU WON THE GAME\nYou: ${playerScore} - ${computerScore} Computer\nClick OK to play again`;
    }
    else if(winner === 2)
    {
        message = `GAME OVER\nYOU LOST THE GAME\nYou: ${playerScore} - ${computerScore} Computer\nClick OK to play again`;
    }
    alert(message);
    playerScore = 0;
    computerScore = 0;
    game();
}

function scoreChecker()
{
    if(playerScore === 5 && computerScore !== 5)
    {
        console.log("=============================")
        console.log(`!!!! CONGRATULATIONS !!!!\nYou won the game.\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
        console.log("=============================")
        winner = 1;
    }
    else if(playerScore !== 5 && computerScore === 5)
    {
        console.log("=============================")
        console.log(`!!!! GAME OVER !!!!\nOh Crap!You lost the game.\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
        console.log("=============================")
        winner = 2;
    }
    else
    {
        return
    }
    gameOver();
}

function computerPlay() 
{
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}
 
 function playRound(playerSelection, computerSelection) 
 {
    if (playerSelection === computerSelection) 
    {
        return `It's a tie! you both picked ${playerSelection}\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
    } 
    else if (playerSelection === "rock" && computerSelection === "scissors") 
    {
        playerScore++;
        scoreChecker();
        return `You win! Rock beats Scissors\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") 
    {
        playerScore++;
        scoreChecker();
        return `You win! Paper beats Rock\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper") 
    {
        playerScore++;
        scoreChecker();
        return `You win! Scissors beats Paper\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
    } 
    else 
    {
        computerScore++;
        scoreChecker();
        return `You lose! ${computerSelection} beats ${playerSelection}\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
    }
 }

function game() 
{
    while (playerScore !== 5 && computerScore !== 5)
    {
        const playerSelection = prompt("Pick your weapon: Rock, Paper or Scissors").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        playRound();
    }   
}

game();