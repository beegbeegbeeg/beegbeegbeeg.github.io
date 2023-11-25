startTimer();
spawnEnemy();

function animate() {
  //playing the game
  if (playing()) {
    move = movement(move);
    newStamp = new Date();
    deltaTime = newStamp - prevStamp;
    prevStamp = newStamp;
    player.translate.x += move.x * deltaTime;
    player.translate.y += move.y * deltaTime;
    updateScore(move, player.translate);
    eatEnemy()
  }
  //ded
  else {
    clearInterval(timerInterval);
    showTryAgainButton();
  }

  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();


