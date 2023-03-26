// generates a random number and associates that choice
// with a computerChoice
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  let answer;

  switch (randomInt) {
    case 0:
      answer = "rock";
      break;
    case 1:
      answer = "paper";
      break;
    case 2:
      answer = "scissors";
      break;
  }

  return answer;
}

// determines the result of a round
// returns 0 for a loss, 1 for a win, and 3 for a tie
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return 3;
  if (playerSelection === "rock" && computerSelection === "paper") return 0;
  if (playerSelection === "paper" && computerSelection === "scissors") return 0;
  if (playerSelection === "scissors" && computerSelection === "rock") return 0;

  return 1;
}

// simulates 5 rounds of rock paper scissors
// returns results to the console
function game() {
  // score tracking
  let playerScore = 0;
  let computerScore = 0;

  // main game loop
  for (let i = 1; i <= 5; i++) {
    console.log(`Game ${i} of 5`);

    // take and validates user input
    let playerSelection = prompt("Rock, Paper, Or Scissors?").toLowerCase();
    validInputBool = validUserInput(playerSelection);

    while (validUserInput(playerSelection) !== 1) {
      playerSelection = prompt(
        "ERROR: Invalid input. Please type 'rock', 'paper', or 'scissors'"
      ).toLowerCase();
      validUserInput(playerSelection);
    }

    // simulate round with playRound()
    let computerSelection = getComputerChoice();
    switch (playRound(playerSelection, computerSelection)) {
      case 0:
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        console.log(`Current Score: ${playerScore} - ${++computerScore}`);
        break;
      case 1:
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        console.log(`Current Score: ${++playerScore} - ${computerScore}`);
        break;
      default:
        console.log("Tie game!");
        console.log(`Current Score: ${playerScore} - ${computerScore}`);
        break;
    }
  }
}

// helper function to valididate userInput
function validUserInput(playerSelection) {
  if (
    playerSelection === "rock" ||
    playerSelection === "scissors" ||
    playerSelection == "paper"
  ) {
    return 1;
  } else return 0;
}

game();
