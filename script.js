function getComputerChoice() {
  let arr = ["stone", "paper", "scissor"];
  let num = 3 * Math.random();

  return arr[Math.floor(num)];
}

let playerScore = 0;
let computerScore = 0;
let ties = 0;

function playRound(playerChoice = "", computerChoice = getComputerChoice()) {
  if (playerChoice.toLowerCase() === computerChoice) {
    ties++;
    return "Tie";
  } else if (
    (playerChoice.toLowerCase() === "stone" && computerChoice === "scissor") ||
    (playerChoice.toLowerCase() === "paper" && computerChoice === "stone") ||
    (playerChoice.toLowerCase() === "scissor" && computerChoice === "paper")
  ) {
    playerScore++;
    return (
      "You Win! " + playerChoice.toUpperCase() + " beats " + computerChoice
    );
  } else {
    computerScore++;
    return (
      "You Loose! " + computerChoice + " beats " + playerChoice.toUpperCase()
    );
  }
}

// function playGame() {
//   for (let index = 0; index < 5; index++) {
//     let playerChoice = prompt("Enter stone paper or scissior");
//     console.log(playRound(playerChoice, getComputerChoice()));
//   }
// }

// Play game DOM

function returnScoreString() {
  return (
    "Computer Score: " +
    computerScore +
    " Player Score: " +
    playerScore +
    " Ties: " +
    ties
  );
}

/**
 * @param {Event & {target: Node}} event
 */

function playerChooses(event) {
  roundResult.textContent = playRound(event.target.textContent);
  score.textContent = returnScoreString();
  // console.log();
}

/**
 * @param {Node} aButton
 */

function bttn(aButton) {
  aButton.addEventListener("click", playerChooses);
}

const roundResult = document.querySelector(".roundResult");
const score = document.querySelector(".score");
const btn = document.querySelectorAll(".btnHolder > button");
btn.forEach(bttn);

// roundResult.textContent

// btn.addEventListener("click", playerChooses)

// playGame()
// const playerSelection = "stone";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
