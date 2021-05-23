const hello = "hello";
const p1button = document.querySelector('#P1');
const p2button = document.querySelector('#P2');
const resetButton = document.querySelector('#Reset');
const p1ScoreDisplay = document.querySelector('#p1Score');
const p2ScoreDisplay = document.querySelector('#p2Score');
let p1Score = 0;
let p2Score = 0;

//Add 1 to player 1 score when button clicked
p1button.addEventListener('click', function () {
    p1Score++;
    p1ScoreDisplay.innerHTML = p1Score;
})

//Add 1 to player 2 score when button clicked
p2button.addEventListener('click', function () {
    p2Score++;
    p2ScoreDisplay.innerHTML = p2Score;
})

//Reset the scores
resetButton.addEventListener('click', function () {
    p1ScoreDisplay.innerHTML = 0;
    p2ScoreDisplay.innerHTML = 0
    p1Score = 0;
    p2Score = 0;
})