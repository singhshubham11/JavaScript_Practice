let random = Math.round(Math.random() * 100 + 1);
console.log(random);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100');
    } else {
        prevGuess.push(guess);
        printGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === random) { 
        displayMessage('You guessed it right!');
        endGame(); 
    } else if (numGuess === 11) { 
        displayMessage(`Game Over. Random number was ${random}`); 
        endGame(); 
    } else if (guess < random) { 
        displayMessage('Number is too low'); 
    } else { 
        displayMessage('Number is too high'); 
    }
}

function printGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', true);
    const p = document.createElement('p'); 
    p.classList.add('button'); 
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'; 
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        e.preventDefault();
        random = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(newGameButton.parentNode);
        playGame = true;
    })
}

/*
    const p = document.createElement('p'); 
    p.classList.add('button'); 
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'; 

    the above 3 line is converted to <p class="button"><h2 id="newGame">Start New Game</h2></p>
    ---------------------------------------------------------------------------------------------------------------

    instead of p.classList.add('button') can we use p.className = "button"???
    
    Yes, you can use p.className = "button"; instead of p.classList.add('button');. Both approaches add a 
    class to the element, but they have some differences in usage.

    p.classList.add('button'):

    Adds a class to the element without affecting any existing classes.
    Useful when you want to add multiple classes to an element dynamically.

    p.className = "button":

    Sets the class attribute of the element, which can overwrite existing classes.
    If the element already has other classes, using className will replace them.
    ------------------------------------------------------------------------------------------------------------------

    userInput.setAttribute('disabled', true);

         Original code: <input type="text" id="guessField" class="guessField">
    After setAttribute: <input type="text" id="guessField" class="guessField" disabled="true">


*/