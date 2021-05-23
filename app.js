const p1button = document.querySelector('#P1');
const p2button = document.querySelector('#P2');
const resetButton = document.querySelector('#Reset');
const p1ScoreDisplay = document.querySelector('#p1Score');
const p2ScoreDisplay = document.querySelector('#p2Score');
const winningScoreSelect = document.querySelector('#scores');
let winningScore = 5;
let p1Score = 0;
let p2Score = 0;
isGameOver = false;

//Add 1 to player 1 score when button clicked
p1button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1ScoreDisplay.classList.add('winner');
            p2ScoreDisplay.classList.add('loser');
        }
        p1ScoreDisplay.innerHTML = p1Score;
    }
})

//Add 1 to player 2 score when button clicked
p2button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2ScoreDisplay.classList.add('winner');
            p1ScoreDisplay.classList.add('loser');
        }
        p2ScoreDisplay.innerHTML = p2Score;
    }
})

//Selecting the winning score of the game
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

//Reset the scoress
resetButton.addEventListener('click', reset)

//defining the reset function
function reset() {
    isGameOver = false;
    p1ScoreDisplay.innerHTML = 0;
    p2ScoreDisplay.innerHTML = 0
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.classList.remove('winner', 'loser');
    p2ScoreDisplay.classList.remove('winner', 'loser');
}