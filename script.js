'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const diceImgEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
//Starting point
let totalScores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;
diceImgEl.classList.add('hidden');

//Roll the dice
btnRoll.addEventListener('click', function () {
    //Generate a dice
    if(playing){
    const getDiceNumber = Math.trunc(Math.random() * 6) + 1;
    //show the dice
    diceImgEl.classList.remove('hidden')
    diceImgEl.src = `dice-${getDiceNumber}.png`
    //checking if dice is not equal 1
    if (getDiceNumber !== 1) {
        //add dice to score of active plaeyr
        currentScore += getDiceNumber;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
}
});

// Hold btn
btnHold.addEventListener('click', function () {
    if(playing){
    totalScores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];
    
    if (totalScores[activePlayer] >= 10) {
        playing = false;
        diceImgEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.name--${activePlayer}`).classList.add('player--winner');
       
    } else{
        switchPlayer();
    }
}
    
})
//1. save the score 
//2. check if score >=100
// end the game

//3.switch the player