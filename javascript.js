const buttons = document.querySelectorAll("button");
var playerSelection;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    playGame(playerSelection);
  });
});

var roundsPlayed = 0;
var playerScore = 0;
var computerScore = 0;
var footerText = document.querySelector("#footerText");
var scoreText = document.querySelector("#scoreText");
var subtitle = document.querySelector("#subtitle");
var playerAction = document.querySelector("#playerAction");
var computerAction = document.querySelector("#computerAction");

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
  roundsPlayed++;

  if (playerSelection === computerSelection) return 0;
  if (playerSelection === "rock" && computerSelection === "paper") return -1;
  if (playerSelection === "paper" && computerSelection === "scissors")
    return -1;
  if (playerSelection === "scissors" && computerSelection === "rock") return -1;

  return 1;
}

function playGame(playerSelection) {
  let computerSelection = getComputerChoice();
  subtitle.textContent = `You selected ${playerSelection}`;
  outcome = playRound(playerSelection, computerSelection);

  updateScore(outcome, playerScore, computerScore);
  updateFooter(outcome, playerSelection, computerSelection);
  updateScoreboard();
  updateActionChoice(playerSelection, computerSelection);
  resetGame();
}

function resetGame() {
  if (playerScore === 5) {
    subtitle.textContent =
      "Congrats! You win! Select an action to start a new game.";
    playerScore = 0;
    computerScore = 0;
  }
  if (computerScore === 5) {
    subtitle.textContent =
      "Oh no! You lose... Select an action to start a new game.";
    playerScore = 0;
    computerScore = 0;
  }
}

function updatePlayerAction(playerSelection) {
  playerAction.textContent = `${playerSelection}`;
}

function updateComputerAction(computerSelection) {
  computerAction.textContent = `${computerSelection}`;
}

function updateActionChoice(playerSelection, computerSelection) {
  updatePlayerAction(playerSelection);
  updateComputerAction(computerSelection);
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
