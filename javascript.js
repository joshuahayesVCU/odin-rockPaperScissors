//

const buttons = document.querySelectorAll("button");
var playerSelection;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // if round 0, start
    // if rounds >1, change behavior
    playerSelection = button.id;
    playGame(playerSelection);
  });
});

var roundsPlayed = 0;
var playerScore = 0;
var computerScore = 0;
var footerText = document.querySelector("#footerText");
var scoreText = document.querySelector("#scoreText");

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
// returns 0 for a loss, 1 for a win, and 0 for a tie
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return 0;
  if (playerSelection === "rock" && computerSelection === "paper") return -1;
  if (playerSelection === "paper" && computerSelection === "scissors")
    return -1;
  if (playerSelection === "scissors" && computerSelection === "rock") return -1;

  return 1;
}

// overloaded, pull out continueGame, updateScore, endGame
function playGame(playerSelection) {
  let computerSelection = getComputerChoice();
  // simulate round with playRound()

  outcome = playRound(playerSelection, computerSelection);

  updateScore(outcome, playerScore, computerScore);
  updateFooter(outcome, playerSelection, computerSelection);
  updateScoreboard();
}

function updateScoreboard() {
  scoreText.textContent = `${playerScore} : ${computerScore}`;
}

function updateFooter(outcome, playerSelection, computerSelection) {
  if (outcome === 0) footerText.textContent = "Tie game!";
  if (outcome === 1)
    footerText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  else
    footerText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
}

function updateScore(outcome) {
  if (outcome === 1) playerScore++;
  else computerScore++;
}
