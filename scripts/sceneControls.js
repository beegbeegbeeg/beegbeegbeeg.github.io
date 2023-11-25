

function updateScore(move, trans) {
  currentScore += Math.abs(move.x) / deflation;
  currentScore += Math.abs(move.y) / deflation;
  document.getElementById('currentScore').textContent = currentScore.toFixed(0);
}
function updateHighScore() {
  document.getElementById('highScore').textContent = highScore.toFixed(0);
}

function showTryAgainButton() {
  overlay.classList.remove('hidden');
  tryAgainButton.classList.remove('hidden');
}
function addScore() {
  currentScore += foodValue; // Reset timer to initia
  foodValue += foodIncrement;
}

function updateTimer() {
  document.getElementById('timerValue').textContent = timerValue.toFixed(1);
}

function startTimer() {
  timerInterval = setInterval(function () {
      if (timerValue > 0) {
          timerValue-=0.1;
          updateTimer();
      } else {
          // Game over or any other action when the timer reaches 0
          clearInterval(timerInterval);
      }
  }, 100); // Update the timer every 1000 milliseconds (1 second)
}
function resetTimer() {
  clearInterval(timerInterval);
  timerValue = defaultTimerValue; // Reset timer to initial value
  updateTimer();
  startTimer();
}
function addTime() {
  timerValue += timeIncrement; // Reset timer to initia
}

function playing(){
  if(player.translate.x * player.translate.x + player.translate.y *player.translate.y > (ringRadius - playerRadius - playerRadius)*(ringRadius - playerRadius - playerRadius)) 
    return false;
  if(timerValue < 0)
    return false;
  return true;  
}

// Function to reset the game
function tryAgain() {
  // Reset position and scores
  player.translate.x = 0;
  player.translate.y = 0;
  move.x = 0;
  move.y = 0;
  if (highScore < currentScore) highScore = currentScore;
  updateHighScore();
  resetTimer();
  spawnEnemy();
  currentScore = 0;


  // Hide the button
  tryAgainButton.classList.add('hidden');
  overlay.classList.add('hidden');
}

function yeetEnemy() {
  enemy.translate.x = 10000;
}

function resetEnemy() {
  yeetEnemy();
}

function spawnEnemy() {
  do {
    x = Math.floor(Math.random() * (ringRadius-2*playerStroke));
    y = Math.floor(Math.random() * (ringRadius-2*playerStroke));
  } while (x * x + y * y >= (ringRadius-2*playerStroke) * (ringRadius-2*playerStroke))

  enemy.translate.x = x;
  enemy.translate.y = y;
}

function playCoinSound() {
  let newSound = gameSound.cloneNode(true);

    // Set currentTime to 0 to ensure the sound starts from the beginning
    newSound.currentTime = 0;

    // Play the new sound instance
    newSound.play();
}
function eatEnemy() {
  const dist = (enemy.translate.x - player.translate.x) * (enemy.translate.x - player.translate.x) + (enemy.translate.y - player.translate.y) * (enemy.translate.y - player.translate.y)
  if (dist    < (enemyRadius)*(enemyRadius)){
    spawnEnemy();
    addTime();
    addScore();
    playCoinSound();
  }
}

