'use strict';
// getting Values from HTML 
const messageDisplay = document.querySelector('.message');
const numberDisplay = document.querySelector('.secretNumber');
let inputValue = document.querySelector('.user-input')
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const instructionsDisplay = document.querySelector('.instructions');
const attemptsDisplay = document.querySelector('.attempt-alert');

const playBtn = document.querySelector('.btn');
const resetBtn = document.querySelector('.reset-btn');
const howToBtn = document.querySelector('.instructions-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

// Generating a Random Number to Guess by the User
let secretNumber = Math.floor(Math.random() * 30 + 1);

// Initiate Score and Highscore Values
let score = 30;
let highScore = 0;

//Playing Btn Event Handler
playBtn.addEventListener('click', function () {

    // Store user input value
    const userInput = Number(inputValue.value);


    document.querySelector('.one input').style = 'border: 5px solid crimson;';

    // If Value is empty.
    if (!userInput) {

        messageDisplay.textContent = 'Please Insert a Number between 1 and 30‼️‼️';
        document.querySelector('.message').style = 'color: red;';
        attemptsDisplay.textContent = '';

        //if user input match the secret number. 
    } else if (userInput === secretNumber) {


        messageDisplay.textContent = 'Correct Youu got it right🥳🎉👏🏽';

        numberDisplay.textContent = secretNumber;

        document.querySelector('.secretNumber').style = 'color: #60b347;';

        document.querySelector('.message').style = 'color: #60b347;';

        document.querySelector('.bottom').style = 'border: 3px solid #60b347;';

        document.querySelector('.one input').style = 'border: 3px solid #60b347;';

        attemptsDisplay.textContent = '';

        resetBtn.textContent = 'Play Again 🔂';



        // Storing the highscore
        if (score > highScore) {
            highScore = score;

            highscoreDisplay.textContent = score;
        }

    } else if (secretNumber !== userInput) {
        if (score > 5) {
            messageDisplay.textContent = userInput > secretNumber ? 'Your guess is higher 📈. Try again❗' : 'Your guess is lower 📉. Try again❗';

            document.querySelector('.message').style = 'color: #88C8FF;';

            score -= 5;
            let attempt = score / 5;

            scoreDisplay.textContent = score;
            attemptsDisplay.textContent = `YOU HAVE ${attempt} ATTEMPTS REMAINING‼️`;


        } else {
            messageDisplay.textContent = 'Game is Over ⛔😓'

            scoreDisplay.textContent = 0;

            document.querySelector('.message').style = 'color: crimson;';

            document.querySelector('.bottom').style = 'border: 3px solid crimson;';

            document.querySelector('.one input').style = 'border: 5px solid crimson;';

            inputValue.value = '';

            attemptsDisplay.textContent = '';
        }
    }
});

// Restart btn event handler
resetBtn.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 30) + 1;

    score = 30;

    scoreDisplay.textContent = '30';
    messageDisplay.textContent = '';
    numberDisplay.textContent = '❓';
    inputValue.value = '';
    attemptsDisplay.textContent = ''
    document.querySelector('.message').style = 'color: #88C8FF;';
    document.querySelector('.bottom').style = 'border: 1px solid rgba(255, 255, 255, 0.18)';
    document.querySelector('.one input').style = 'border: 5px solid #88C8FF;';
});


// Instruction modal
howToBtn.addEventListener('click', function () {

    // Open modal
    instructionsDisplay.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {

    //Close modal
    instructionsDisplay.classList.add('hidden');
    overlay.classList.add('hidden');
})



