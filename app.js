//Define variables-------------------------
const p1 = {
    score: 0,
    button: document.querySelector('#P1'),
    display: document.querySelector('#p1Score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#P2'),
    display: document.querySelector('#p2Score')
}

const resetButton = document.querySelector('#Reset');
const winningScoreSelect = document.querySelector('#scores');
let winningScore = 5;
let p1Score = 0;
let p2Score = 0;
isGameOver = false;

//Define function---------------------------
//This is a generic function to minimize the amount of code being written
//It accepts arguments based on the object for p1 and p2 defined above
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerHTML = player.score;
    }
}

//Add 1 to player 1 score when button clicked
p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
})

//Add 1 to player 2 score when button clicked
p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
})

//Selecting the winning score of the game
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

//Reset the scoress
resetButton.addEventListener('click', reset)

//defining the reset function. Use a loop incase you ever wanted to increase the number of players.
//That would require a lot of code to reset each variable assigned to each player.
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerHTML = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}