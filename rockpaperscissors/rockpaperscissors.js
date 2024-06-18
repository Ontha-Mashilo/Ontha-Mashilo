//create array
let options = ['rock', 'paper', 'scissors'];
let playerDisplay = document.getElementById("playerDisplay");
let compDisplay = document.getElementById("compDisplay");
let winner = document.getElementById("winner");
let score = document.getElementById("score");
let playerScore = 0;
let computerScore = 0;





//create function to run the program
function game(userChoice){

  let computerChoice = options[Math.floor(Math.random() * 3)];
   
  
  if (userChoice === 'rock' && computerChoice === 'paper') {
        playerDisplay.textContent = `You Chose ${userChoice}`
        compDisplay.textContent = `The Computer Chose ${computerChoice}`
        winner.textContent = `You Lose!`
        computerScore++;
        score.textContent = `Score: ${playerScore} - ${computerScore}`
  } else if (userChoice === computerChoice){
        playerDisplay.textContent = `You Chose ${userChoice}`
        compDisplay.textContent = `The Computer Chose ${computerChoice}`
        winner.textContent = `It's a Tie!`
  } else if (userChoice === 'rock' && computerChoice === 'scissors'){
        playerDisplay.textContent = `You Chose ${userChoice}`
        compDisplay.textContent = `The Computer Chose ${computerChoice}`
        winner.textContent = `You Win!`
        playerScore++;
        score.textContent = `Score: ${playerScore} - ${computerScore}`
  }


  if (userChoice === 'paper' && computerChoice === 'scissors') {
        playerDisplay.textContent = `You Chose ${userChoice}`
        compDisplay.textContent = `The Computer Chose ${computerChoice}`
        winner.textContent = `You Lose!`
        computerScore++;
        score.textContent = `Score: ${playerScore} - ${computerScore}`
  } else if (userChoice === 'paper' && computerChoice === 'rock'){
        playerDisplay.textContent = `You Chose ${userChoice}`
        compDisplay.textContent = `The Computer Chose ${computerChoice}`
        winner.textContent = `You Win!`
        playerScore++;
        score.textContent = `Score: ${playerScore} - ${computerScore}`
  }


  if (userChoice === 'sissors' && computerChoice === 'rock') {
        playerDisplay.textContent = `You Chose${userChoice}`
        compDisplay.textContent = `The Computer Chose${computerChoice}`
        winner.textContent = `You Lose!`
        computerScore++;
        score.textContent = `Score: ${playerScore} - ${computerScore}`
  } else if (userChoice === 'scissors' && computerChoice === 'paper'){
        playerDisplay.textContent = `You Chose${userChoice}`
        compDisplay.textContent = ` The Computer Chose ${computerChoice}`
        winner.textContent = `You Win!`
        playerScore++;
        score.textContent = `Score: ${playerScore} - ${computerScore}`
  }

}