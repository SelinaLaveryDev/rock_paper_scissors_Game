function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  randomOption = Math.floor(Math.random() * options.length);
  return options[randomOption];
}
console.log(getRandomComputerResult());

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
console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerResult++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
