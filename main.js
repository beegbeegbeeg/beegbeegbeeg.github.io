startTimer();
spawnEnemy();

function animate() {
  //playing the game
  if(playing()){
    move = movement(move);
    player.translate.x += move.x;
    player.translate.y += move.y;
    updateScore(move, player.translate);
    eatEnemy()
  }
  //ded
  else{
    clearInterval(timerInterval);
    showTryAgainButton();
  }
  
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();


