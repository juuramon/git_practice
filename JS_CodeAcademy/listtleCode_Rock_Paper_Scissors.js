const unifyUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Wrong choice mate!');
  }
}

const getComputerChoice = () => {
  randomNumber =  Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
    default: console.log('Error in ComputerSelection');
  };

  return randomNumber
}

const whoIsWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You Won!';
  }
  else if (userChoice === computerChoice) {
    return 'Game is a tie.';
  }
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won.';
    } else {
      return 'You Won!';
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won.';
    } else {
      return 'You Won!';
    }
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won.'
    } else {
      return 'You Won!'
    }
  }
}

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  userChoice = unifyUserChoice(userChoice);
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(whoIsWinner(userChoice,computerChoice));
}

playGame('scissors');
