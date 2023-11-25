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
  
  illo.rotate.x += 0.01;
  requestAnimationFrame( animate );
}
animate();


