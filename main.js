let isSpinning = true;
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  resize: 'fullscreen',
});

// circle
let circle = new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  translate: { z: 40 },
  stroke: 20,
  color: '#636',
});

var move = {x:0, y:0};
function animate() {
  move = movement(move);
  circle.translate.x += move.x;
  circle.translate.y += move.y;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();


