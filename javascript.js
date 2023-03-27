const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});

var footerText = document.querySelector("#footerText");

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
function game(playerSelection) {
  var playerScore = 0;
  var computerScore = 0;

  // simulate round with playRound()
  let computerSelection = getComputerChoice();
  switch (playRound(playerSelection, computerSelection)) {
    case 0:
      footerText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
      break;
    case 1:
      footerText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
      break;
    default:
      footerText.textContent = "Tie game!";
      break;
  }
}
