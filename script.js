'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

 */

//! GAME:  GUESS Number
/*
 * User taks is to guess a number wchich is generated randomly from 1 to 20
 * The score is 20 and after every faliture score is decressed by one
 * If the number from keyboard is equal to secretNumber then the game is puased and the highscore is same like last score number.
 */

//* Declare a random value
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//* Declare a score value
let score = 20;

//* We have to declare a highScore wchich will be changing if our score is better than last highscore value;
let highScore = 0;
document.querySelector('.number').textContent = secretNumber;

//*Functions to display a message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//* Function to change a value of score
let changeScore = function (newScore) {
  document.querySelector('.score').textContent = newScore;
};

//* Fucntion wchich changes a bg color
const changeBgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

//* It is action for the ,,again button" it reset all of score

let gameReset = function () {
  score = 20;

  changeScore(score);

  changeBgColor('#222'); // chaning the background color

  document.querySelector('.number').style.width = '15rem '; // chaning the width of the number class
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?'; // making a secretNumber invisible
  document.querySelector('.guess').value = ''; // reseting forms
  displayMessage('Start guessing again');
};
document.querySelector('.again').addEventListener('click', gameReset); // addEventListener  will work if we just put a name of function

/* document.querySelector('.again').addEventListener('click', function () {
  //*normal funciton not declared to variable
  score = 20;

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222'; // chaning the background color

  document.querySelector('.number').style.width = '15rem '; // chaning the width of the number class
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?'; // making a secretNumber invisible
  document.querySelector('.guess').value = ''; // reseting forms
}); 
*/
//* Mechanism on event click button
document.querySelector('.check').addEventListener('click', function () {
  //*  if value is higher than 20 give alert message to user

  //* One way to make condition check about the value
  if (document.querySelector('.guess').value > 20) {
    alert("The value can't be higer than 20");
    gameReset();
  } else if (document.querySelector('.guess').value < 0) {
    alert("The value can't be less than 0 ");
    gameReset();
  }

  //* Second  to make condition check about the value
  /*   document.querySelector('.guess').value > 20
    ? (alert("The value can't be higer than 20"), gameReset())
    : document.querySelector('.guess').value < 0
    ? (alert("The value can't be less than 0"), gameReset())
    : console.log('bla');
 */

  //? Which one is cleaner???

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number ⛔ ');
  } else if (guess === secretNumber) {
    displayMessage('Correct number😍');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.highscore').textContent = score;

    changeBgColor('#60b347');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      changeScore(0);
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
