let currentScore = 0;
let highScore = 0;

function updateScore(move, trans) {
  const deflation = 100;
  currentScore += Math.abs(move.x) * Math.abs(trans.x)/deflation;
  currentScore += Math.abs(move.y) * Math.abs(trans.y)/deflation;
  document.getElementById('currentScore').textContent = currentScore.toFixed(0);
}
function updateHighScore() {
  document.getElementById('highScore').textContent = highScore.toFixed(0);
}
let tryAgainButton = document.getElementById('tryAgainButton');
let overlay = document.getElementById('overlay');

function showTryAgainButton() {
  overlay.classList.remove('hidden');
  tryAgainButton.classList.remove('hidden');
}

// Function to reset the game
function tryAgain() {
    // Reset position and scores
    circle.translate.x = 0;
    circle.translate.y = 0;
    move.x = 0;
    move.y = 0;
    if(highScore < currentScore) highScore = currentScore;
    updateHighScore();
    currentScore = 0;


    // Hide the button
    tryAgainButton.classList.add('hidden');
    overlay.classList.add('hidden');

    
}