const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  randomOption = Math.floor(Math.random() * options.length);
  return options[randomOption];
}

function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else {
    return false;
  }
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
}
showResults("Rock");
