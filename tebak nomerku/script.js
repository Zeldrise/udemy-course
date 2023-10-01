'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 nomor benar!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ tidak ada nomor';
    displayMessage('⛔ tidak ada nomor');

    //when player win!
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 nomor benar!';
    displayMessage('🎉 nomor benar!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 terlalu tinggi!' : '📉 terlalu rendah!';
      displayMessage(
        guess > secretNumber ? '📈 terlalu tinggi!' : '📉 terlalu rendah!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😥 kamu kalah!';
      displayMessage('😥 kamu kalah!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high!
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 terlalu tinggi!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😥 kamu kalah!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess too low!
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 terlalu rendah!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😥 kamu kalah!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Mulai menebak...';
  displayMessage('Mulai menebak...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#131313';
  document.querySelector('.number').style.width = '15rem';
});
