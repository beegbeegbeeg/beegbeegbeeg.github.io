let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  // stop spinning when drag starts
  onDragStart: function() {
    isSpinning = false;
  },
  //start again when drag stops
  onDragEnd: function() {
    isSpinning = true;
  },
});

// circle
let circle = new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  translate: { z: 40 },
  stroke: 20,
  color: '#636',
});

// square
let square = new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  translate: { z: -40 },
  stroke: 12,
  color: '#E62',
  fill: true,
});

function animate() {
  illo.rotate.y += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();