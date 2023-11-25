//constants
const ringRadius = 200;
const foodIncrement = 50;
const foodTime = 2;
const playerRadius = 20;
const defaultTimerValue = 15;
const timeIncrement = 2;
const deflation = 100;
const playerStroke = 20;
const enemyRadius = 5;
const enemyStroke = 10;
//variables
let timerValue = defaultTimerValue;
let currentScore = 0;
let highScore = 0;
let foodValue = 50;
let deltaTime =new Date();
let newStamp = new Date();
let prevStamp = new Date();
//html elements
let gameSound = document.getElementById('gameSound');
let tryAgainButton = document.getElementById('tryAgainButton');
let overlay = document.getElementById('overlay');
//arrays
// enemies = document.createElement("enemies");

//simulation
var move = {x:0, y:0};
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  resize: 'fullscreen',
});

// player
let player = new Zdog.Ellipse({
  addTo: illo,
  diameter: 2*playerRadius,
  stroke: playerStroke,
  color: '#636',
});

let arena = new Zdog.Ellipse({
  addTo: illo,
  diameter: 2*ringRadius,
  stroke: playerStroke,
  color: '#F36',
});

let enemy = new Zdog.Ellipse({
  addTo: illo,
  diameter: 2*enemyRadius,
  translate: {},
  stroke: enemyStroke,
  color: '#000',
});