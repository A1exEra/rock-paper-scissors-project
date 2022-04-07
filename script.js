"use strict";
//1.create DOM ELEMENTS
const computerChoise = document.querySelector("#computer_choise");
const humanChoise = document.querySelector("#human_choise");
const result = document.querySelector("#result");
const buttonClick = document.querySelectorAll(".button");
const playAgain = document.querySelector("#reset");
const computerScore = document.querySelector("#comp_score");
const playerScore = document.querySelector("#player_score");

//Implementing score
let compScore = 0;
let humanScore = 0;

//2.make the buttons work -- display correct result in the player field;
let playerChoise;
buttonClick.forEach((button) =>
  button.addEventListener("click", function (e) {
    playerChoise = e.target.textContent;
    humanChoise.textContent = playerChoise;
    computer();
    displayResult();
    computerScore.textContent = compScore;
    playerScore.textContent = humanScore;
    endGame();
    console.log(compScore);
    console.log(humanScore);
  })
);
//3.create random choise for the computer and display the result in the computer field
function computer() {
  const randomChoise = Math.trunc(Math.random() * 3) + 1;
  if (randomChoise === 1) computerChoise.textContent = `Rock`;
  if (randomChoise === 2) computerChoise.textContent = `Paper`;
  if (randomChoise === 3) computerChoise.textContent = `Scissors`;
}
//4.create the game logic and declare the winner
function displayResult() {
  if (humanChoise.textContent === computerChoise.textContent) {
    result.textContent = `It's a DRAW!`;
  }
  if (
    humanChoise.textContent === `Rock` &&
    computerChoise.textContent === `Scissors`
  ) {
    result.textContent = `Player WINS!`;
    humanScore++;
  }
  if (
    humanChoise.textContent === `Rock` &&
    computerChoise.textContent === `Paper`
  ) {
    compScore++;
    result.textContent = `Computer WINS!`;
  }
  if (
    humanChoise.textContent === `Paper` &&
    computerChoise.textContent === `Scissors`
  ) {
    compScore++;
    result.textContent = `Computer WINS!`;
  }
  if (
    humanChoise.textContent === `Paper` &&
    computerChoise.textContent === `Rock`
  ) {
    humanScore++;
    result.textContent = `Player WINS!`;
  }
  if (
    humanChoise.textContent === `Scissors` &&
    computerChoise.textContent === `Paper`
  ) {
    humanScore++;
    result.textContent = `Player WINS!`;
  }
  if (
    humanChoise.textContent === `Scissors` &&
    computerChoise.textContent === `Rock`
  ) {
    compScore++;
    result.textContent = `Computer WINS!`;
  }
}
//5.display the result in the result field
//6.implement play again button with all the fileds emptied
playAgain.addEventListener("click", function () {
  gameReset();
});
function gameReset() {
  computerChoise.textContent = `?`;
  humanChoise.textContent = `?`;
  result.textContent = `?`;
  computerScore.textContent = `0`;
  playerScore.textContent = "0";
  compScore = 0;
  humanScore = 0;
}
//7. implementing the ENDGAME
function endGame() {
  if (humanScore === 10) {
    gameReset();
    alert("You won the game!");
  }
  if (compScore === 10) {
    gameReset();
    alert(`You lost the game!`);
  }
}
