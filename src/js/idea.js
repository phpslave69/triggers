// User input
const rows = 10;
const cols = 10;
const cellSize = 50;

// Dot't touch these
const width = cols * cellSize;
const height = rows * cellSize;

let field;

function setup() {
    field = new Field();
    createCanvas(width, height);
}

function draw() {
    background(255);
    field.update();
}