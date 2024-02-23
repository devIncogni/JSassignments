function getComputerChoice() {
  let arr = ["stone", "paper", "scissor"];
  let num = 3 * Math.random();

  return arr[Math.floor(num)];
}

function playRound(playerChoice = "", computerChoice = getComputerChoice()) {
  if (playerChoice.toLowerCase() === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice.toLowerCase() === "stone" && computerChoice === "scissor") ||
    (playerChoice.toLowerCase() === "paper" && computerChoice === "stone") ||
    (playerChoice.toLowerCase() === "paper" && computerChoice === "stone")
  ) {
    return "You Win! " + playerChoice.toLowerCase() + " beats " + computerChoice;
  } else {
    return "You Loose! " + computerChoice + " beats " + playerChoice.toLowerCase();
  }
}

function playGame() {
  for (let index = 0; index < 5; index++) {
    let playerChoice = prompt("Enter stone paper or scissior");
    console.log(playRound(playerChoice, getComputerChoice()));
  }
}

playGame()
// const playerSelection = "stone";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
