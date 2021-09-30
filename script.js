function computerPlays() {
  const options = ['Rock', 'Paper', 'Scissors'];
  let choice = options[Math.floor(Math.random() * options.length)]
  return choice
}   

function singleRound(userSelection, computerSelection) {
  let result = '';
  let userRoundScore = 0;
  let computerRoundScore = 0;
  if (userSelection === computerSelection) {
    result = `Oh no, the Computer also selected ${computerSelection}. You tied this round!`
    ++userRoundScore
    ++computerRoundScore
  } else if ((userSelection === 'Rock') && (computerSelection === 'Scissors') ||
      (userSelection === 'Paper') && (computerSelection === 'Rock') ||
      (userSelection === 'Scissors') && (computerSelection === 'Paper')) {
        result = `The Computer played ${computerSelection}, ${userSelection} beats ${computerSelection}. You win this round!`;
        ++userRoundScore
      } else if ((userSelection === 'Rock') && (computerSelection === 'Paper') ||
          (userSelection === 'Paper') && (computerSelection === 'Scissors') ||
          (userSelection === 'Scissors') && (computerSelection === 'Rock')) {
            result = `The Computer played ${computerSelection}, ${computerSelection} beats ${userSelection}. You lose this round!`;
            ++computerRoundScore
    }
  return [result, userRoundScore, computerRoundScore]
}

// define variables
let roundResult;
let userScore = 0;
let computerScore = 0;
let roundsLeft = 5;

const dialogue = document.querySelector(".dialogue");
const userScoreText = document.querySelector(".user-score");
const computerScoreText = document.querySelector(".computer-score")
const roundsLeftText = document.querySelector(".rounds");
const divider = document.querySelector(".divider");
const playAgainText = document.querySelector(".play-again");

function userClick(userSelection) {
  roundResult = singleRound(userSelection,computerPlays());
  userScore += roundResult[1];
  computerScore += roundResult[2];
  dialogue.textContent = roundResult[0];
  userScoreText.textContent = userScore;
  computerScoreText.textContent = computerScore;
  divider.textContent = "-";
  --roundsLeft
  if (roundsLeft > 0) {
    roundsLeftText.textContent = `There are ${roundsLeft} rounds left. Play again!`
  } else {
    if (userScore > computerScore) {
      roundsLeftText.textContent = "Congratulations you win!"
      roundsLeftText.style.color = 'green';
    } else if (userScore < computerScore) {
      roundsLeftText.textContent = "Oh no, you lose!"
      roundsLeftText.style.color = 'red';
      playAgainText.textContent = "Press 'Play again' to start a new game."
    } else {
      roundsLeftText.textContent = "You tied!"
      playAgainText.textContent = "Press 'Play again' to start a new game."
    }
  }
}


const rock = document.querySelector(".rock");
rock.addEventListener('click', function() {
  userClick('Rock')
});

const paper = document.querySelector(".paper");
paper.addEventListener('click', function() {
userClick('Paper')
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener('click', function() {
userClick('Scissors')
});