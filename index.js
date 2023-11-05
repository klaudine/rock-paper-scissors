/* eslint-disable */

import "./style.css";

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput === "paper") {
    console.log("User chose paper");
  } else if (userInput === "rock") {
    console.log("User chose rock");
  } else if (userInput === "scissors") {
    console.log("User chose scissors");
  } else if (userInput === "bomb") {
    return "The user won!";
  } else {
    console.log("Choose again");
  }
}

// let play = "PAPER";
// getUserChoice(play);

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    console.log("Computer chose rock");
  } else if (number === 1) {
    console.log("Computer chose paper");
  } else if (number === 2) {
    console.log("Computer chose scissors");
  }
}

// let play = "";
// getComputerChoice(play);

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "rock" && computerChoice === "paper")
    console.log("The computer won!");
  if (userChoice === "rock" && computerChoice === "scissors")
    console.log("The user won!");
  if (userChoice === "paper" && computerChoice === "rock")
    console.log("The user won!");
  if (userChoice === "paper" && computerChoice === "scissors")
    console.log("The computer won!");
  if (userChoice === "scissors" && computerChoice === "rock")
    console.log("The computer won!");
  if (userChoice === "scissors" && computerChoice === "paper")
    console.log("The user won!");
  if (userChoice === "bomb") {
    return;
  }
  if (userChoice == computerChoice) console.log("It's a tie");
}

function playGame() {
  let userChoice = getUserChoice("rock");
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
