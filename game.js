var userChoice = prompt("Choose rock, paper, or scissors:")
var computerChoice = Math.random();
if (computerChoice < 0.33) {
  computerChoice = "rock";
} else if (computerChoice < 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

if (userChoice === computerChoice) {
  alert("You chose " + userChoice + "\n Computer chose " + computerChoice + "\n This is a tie!");
} else if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    alert("You chose scissors. \n Computer chose rock. \n You loss!");
  } else {
    alert("You chose scissors. \n Computer chose rock. \n You loss!");
    }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    alert("You chose paper. \n Computer chose rock. \n You win!");
  } else {
    alert("You chose paper. \n Computer chose rock. \n You win!");
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "paper") {
    alert("You chose sciccors. \n Computer chose paper. \n You loss!");
  } else {
    alert("You chose rock. \n Computer chose paper. \n You loss!");
  }
} else {
  alert("Invalid choice. Please choose rock, paper, or scissors.");
}

