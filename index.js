function getUserChoice (userInput) {
  userInput = userInput.toLowerCase();

  if (userInput === "paper") {
    console.log("User chose paper");
  } else if (userInput === "rock") {
    console.log("User chose rock");
  } else if (userInput === "scissors") {
    console.log("User chose scissors");
  } else {
    console.log("Choose again");
  }

}


function getComputerChoice () {
  let number = Math.floor(Math.random() * 3);
  if (number === 0){
    console.log("Computer chose rock");
  } else if (number === 1) {
    console.log("Computer chose paper");
  } else {
    console.log("Computer chose scissors");
  }
}


function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("The computer won!")
      } else {
        console.log("The user won!");
      }
  } else if (userChoice === "paper" && (computerChoice === "scissors")) {
      console.log("The computer won!");
  } else if (userChoice === "paper" && (computerChoice !== "scissors")) {
      console.log("The player won!");
  } else if (userChoice === "scissors" && (computerChoice === "rock")) {
      console.log("The computer won!");
  } else if (userChoice === "scissors" && (computerChoice !== "rock")) {
      console.log("The player won!");
  }
}

// determineWinner("paper", "scissors")

function playGame () {
  let userChoice = getUserChoice("rock");
    console.log(userChoice);
  let computerChoice = getComputerChoice()
    console.log(computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}


playGame();
