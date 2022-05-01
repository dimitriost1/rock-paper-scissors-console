const humanPlay = prompt(
  "Your turn. \n Write in the field Rock, Paper or Scissors:"
).toUpperCase();

// const humanPlay = "PaPer".toUpperCase();

// console.log(humanPlay);

let playValues = ["ROCK", "SCISSORS", "PAPER"];

const humanPlayValue = playValues.indexOf(humanPlay);

const getComputerPlay = () => Math.floor(Math.random() * 3);

let computerPlayValue = getComputerPlay();
let computerPlay = playValues[computerPlayValue];
let winnerValue;

if (Math.abs(humanPlayValue - computerPlayValue > 1)) {
  winnerValue = Math.max(computerPlayValue, humanPlayValue);
} else {
  winnerValue = Math.min(computerPlayValue, humanPlayValue);
}

let winner = winnerValue === humanPlayValue ? "You" : "Computer";

console.log(`You played: ${humanPlay}`);
console.log(`Computer played: ${computerPlay}`);

if (computerPlayValue === humanPlayValue) {
  console.log("It's a Tie...");
} else {
  console.log(`The Winner is: ${winner}`);
}
