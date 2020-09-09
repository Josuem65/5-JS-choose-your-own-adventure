let userChoice = prompt("Chose rock, paper, or scissors")
let computerChoice = Math.floor(Math.random() * 3)
let computerAnswer

if (computerChoice == 0) {
  computerAnswer = "rock"
} else if (computerChoice == 1) {
  computerAnswer = "paper"
} else {
  computerAnswer = "scissors"
}

if (userChoice == "rock" && computerAnswer == "rock") {
  alert("It's a tie! Try again")
} else if (userChoice == "rock" && computerAnswer == "paper") {
  alert("You win!")
} else {
  alert("You lose, play again")
}

if (userChoice == "paper" && computerAnswer == "rock") {
  alert("You win!")
} else if (userChoice == "paper" && computerAnswer == "paper") {
  alert("It's a tie! Try again")
} else {
  alert("You lose, play again")
}

if (userChoice == "scissors" && computerAnswer == "rock") {
  alert("You lose, play again")
} else if (userChoice == "scissors" && computerAnswer == "paper") {
  alert("You Win!")
} else {
  alert("It's a tie, play again")
}
