'use strict';

// document.getElementsByClassName('.message');
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 7;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 17;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!🙅‍♂️';
  }
});
