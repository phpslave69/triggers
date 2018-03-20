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
let selected = [0, 0];
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
    let x = Math.floor(mouseX / cellSize);
    let y = Math.floor(mouseY / cellSize);
    //If one cell is waiting to be connected
    if (interFace.state == interFace.types.NONE && inField(x, y) == true) {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                if (field.cells[i][j].connected == false) {
                    field.cells[i][j].connected = [];
                    field.cells[i][j].connected[0] = x;
                    field.cells[i][j].connected[1] = y;
                }
            }
        }
    }

    //choose from menu
    if (y == rows && interFace.state == interFace.types.NONE) {
        interFace.setState();
    }
    
    //set a cell
    if (interFace.state != interFace.types.NONE) {
        interFace.setState();
    }

}

function inField(x, y) {
    if (x < 0 || x > cols || y < 0 || y >= rows) {
        return false;
    }
    return true;
}