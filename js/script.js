'use strict';

// DOM ELEMENTS
const lblTotalScore0 = document.querySelector('#score--0');
const lblTotalScore1 = document.querySelector('#score--1');
const lblPlayer0 = document.querySelector('.player--0');
const lblPlayer1 = document.querySelector('.player--1');
const lblCurrentScore0 = document.querySelector('#current--0');
const lblCurrentScore1 = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/************************************************************************************ */
// DATA
const totalScores = [0, 0];
let activePlayer = 0;
let currentScore = 0;


//************************************************************************************/ 
// Set default views
lblTotalScore0.textContent = 0;
lblTotalScore1.textContent = 0;
diceImg.classList.add('hidden');

/**************************************************************************************/
// Event handlers
btnRoll.addEventListener('click', function() {
    // Generate the dice roll.
    const roll = Math.trunc(Math.random() * 6) + 1;

    // (View) Show the relevant dice.
    diceImg.classList.remove('hidden');
    diceImg.src = `/imgs/dice-${roll}.png`;

    // Check if user roll 1.
    if(roll !== 1){ 
        currentScore += roll;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else { // If roll 1, then switch to user.
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        lblPlayer0.classList.toggle('player--active');
        lblPlayer1.classList.toggle('player--active');
    }

})
