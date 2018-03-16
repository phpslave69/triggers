// User input
const rows = 10;
const cols = 20;
const cellSize = 50;
const fr = 60;

// Dot't touch these
const width = cols * cellSize;
const height = rows * cellSize;
const forUI = 50;
let frame = 0;
let tick = 0;
let field;
let interFace;
let ticked = false;
let cellId = 0;
let ballId = 0;

const STOP = 0;
const MOVEUP = 1;
const MOVERIGHT = 2;
const MOVEDOWN = 3;
const MOVELEFT = 4;
const TELEIN = 0;
const TELEOUT = 1;

function setup() {
    frameRate(fr);
    field = new Field();
    interFace = new Interface();
    createCanvas(width, height + forUI);
}

function draw() {
    frame++;
    tick = Math.floor(frame / fr);
    if (frame % fr == 0) {
        ticked = true;
    } else {
        ticked = false;
    }
    background(255);
    field.update();
    interFace.update();
}

function mousePressed() {
    interFace.setState();
}