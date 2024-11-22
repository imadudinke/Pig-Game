'use stict';
// VARIABLES  SELECTION
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const rollBtn = document.querySelector('.btn--roll');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const displayNone = function () {
  classList.add('hidden');
};
let activePlayer = 0;
let current = 0;
let score = [0, 0];
// RESET TO STARTING
score0EL.textContent = 0;
score1EL.textContent = 0;
dice.classList.add('hidden');

const switching = function () {
  if (player0El.classList.contains('player--active')) {
    current0EL.textContent = 0;
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
    current = 0;
  } else {
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    current1EL.textContent = 0;
    current = 0;
  }
};

//   <!...........ROLLING BTN.........!>

rollBtn.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  // IF IT DOESN'T CONTAIN ONE

  if (diceNumber !== 1) {
    current += diceNumber;
    if (player0El.classList.contains('player--active')) {
      current0EL.textContent = current;
    } else {
      current1EL.textContent = current;
    }
  }
  //   IF IT CONTAIN 1
  else {
    switching();
  }
});

//   <!...........HOLD BTN.........!>

holdBtn.addEventListener('click', function () {
  if (player0El.classList.contains('player--active')) {
    score[0] += current;
    player0El.classList.remove('player--active');
    current = 0;
    score0EL.textContent = score[0];
    player1El.classList.add('player--active');
    current0EL.textContent = 0;
    if (score[0] >= 20) {
      player0El.classList.add('player--winner');
      // score0EL.textContent = `PLAYER ONE WIN'S THE GAME`;
      rollBtn.classList.add('hidden');
      holdBtn.classList.add('hidden');
      dice.classList.add('hidden');
    }
  } else {
    score[1] += current;
    player0El.classList.add('player--active');
    score1EL.textContent = score[1];
    player1El.classList.remove('player--active');
    current1EL.textContent = 0;
    current = 0;
    if (score[1] >= 20) {
      // score0EL.textContent = `PLAYER TWO WIN'S THE GAME`;
      player1El.classList.add('player--winner');
      rollBtn.classList.add('hidden');
      holdBtn.classList.add('hidden');
      dice.classList.add('hidden');
    }
  }
});
//   <!...........NEW GANE BTN.........!>

newGame.addEventListener('click', function () {
  dice.classList.add('hidden');
  current = 0;
  score = [0, 0];
  current0EL.textContent = current;
  current1EL.textContent = current;
  score0EL.textContent = score[0];
  score1EL.textContent = score[1];
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  rollBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
});
