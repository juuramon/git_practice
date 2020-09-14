let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
var generateTarget = () => {
 return Math.floor(Math.random() * 10)
}

var getAbsoliteDistance = (guess, target) =>  Math.abs(target - guess)

var compareGuesses = (huGuess, compGuess, target) => {
 let huClose = getAbsoliteDistance(target, huGuess);
 let compClose = getAbsoliteDistance(target, compGuess);
  if ( huClose === compClose || huClose < compClose ) {
    return true 
  } else {
    return false
  }
}

var updateScore = (winner) => {
  if ( winner == 'human') {
    return humanScore += 1
  } else if ( winner == 'computer') {
    return computerScore += 1
  }
}

var advanceRound = () => currentRoundNumber++
