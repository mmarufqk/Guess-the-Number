let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const restartButton = document.getElementById('restart');
const message = document.getElementById('message');

function handleSubmit() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        submitButton.style.display = 'none'; 
        restartButton.style.display = 'inline-block'; 
    } else if (userGuess < targetNumber) {
        message.textContent = 'Try a higher number.';
    } else {
        message.textContent = 'Try a lower number.';
    }

    guessInput.value = '';
}

guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSubmit();
    }
});

submitButton.addEventListener('click', handleSubmit);

restartButton.addEventListener('click', function() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    message.textContent = '';
    guessInput.value = '';

    submitButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
});
