let isSpinning = true;
var move = {x:0, y:0};
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  resize: 'fullscreen',
});

// circle
let circle = new Zdog.Ellipse({
  addTo: illo,
  diameter: 40,
  stroke: 20,
  color: '#636',
});

let arena = new Zdog.Ellipse({
  addTo: illo,
  diameter: 400,
  translate: { z: 40 },
  stroke: 20,
  color: '#F36',
});


function animate() {
  //playing the game
  if(    circle.translate.x * circle.translate.x + circle.translate.y *circle.translate.y <= 160*160 ){
    move = movement(move);
    circle.translate.x += move.x;
    circle.translate.y += move.y;
    updateScore(move, circle.translate);
  }
  //ded
  else{
    showTryAgainButton();
  }
  
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();


