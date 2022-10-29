'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const diceImgEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting point
let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceImgEl.classList.add('hidden');

//Roll the dice
btnRoll.addEventListener('click', function () {
    //Generate a dice
    const getDiceNumber = Math.trunc(Math.random() * 6) + 1;
    //show the dice
    diceImgEl.classList.remove('hidden')
    diceImgEl.src = `dice-${getDiceNumber}.png`
    //checking if dice is not equal 1
    if (getDiceNumber !== 1) {
    //add dice to score
        currentScore += getDiceNumber;
        currentScore0El.textContent = currentScore;
    }
})