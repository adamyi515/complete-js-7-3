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
const playerScores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let isPlaying = true;


//************************************************************************************/ 
// Set default views
lblTotalScore0.textContent = 0;
lblTotalScore1.textContent = 0;
diceImg.classList.add('hidden');

//************************************************************************************/ 
// Functions
function switchPlayer() {
    lblPlayer0.classList.toggle('player--active');
    lblPlayer1.classList.toggle('player--active');
    
    // Reset the current score.
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;
}

/**************************************************************************************/
// Event handlers
btnRoll.addEventListener('click', function() {
    if(isPlaying){
        // Roll a die.
        const roll = Math.trunc(Math.random() * 6) + 1;

        // Show the dice.
        diceImg.classList.remove('hidden');
        diceImg.src = `./imgs/dice-${roll}.png`;

        if(roll !== 1){ // If not 1, then add the points to the current player.
            currentScore += roll;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else { // If 1, change player and reset current score.
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if(isPlaying){
        //1. Add the current score to the total player's score
        playerScores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = playerScores[activePlayer];

        //2. Check if the total score is >= 100. If so, then player wins and game is done.
        if(playerScores[activePlayer] >= 20){
            // Remove the ability to roll dice or hold.
            isPlaying = false;

            // Set a new class to the winner.
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

            // Remove the dice from the game.
            diceImg.classList.add('hidden');
        }

        //3. If the total score is NOT >= 100, then switch to the next player.
        switchPlayer();
    }
    
});

btnNew.addEventListener('click', function() {

});