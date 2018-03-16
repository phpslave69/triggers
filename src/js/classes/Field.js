/**
 * Created by Sergey on 15.03.2018.
 */

class Field {

    constructor() {
        this.cells = [];
        this.balls = [];
        this.initGrid();
        this.addInitCells();
    }

    initGrid() {
        for (let i = 0; i < rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < cols; j++) {
                this.cells[i][j] = new Cell(j, i);
            }
        }
    }

    addInitCells() {
        this.cells[0][1] = new Spawner(0, 1, MOVERIGHT, 70, 2);
        this.cells[7][1] = new Destructor(7, 1);
        this.cells[3][1] = new ChangeDir(3, 1, MOVEDOWN);
        this.cells[3][6] = new ChangeDir(3, 6, MOVERIGHT);
        this.cells[5][6] = new ChangeDir(5, 6, MOVEUP);
        this.cells[5][1] = new ChangeDir(5, 1, MOVERIGHT);
    }

    update() {
        this.show();
        this.updateCells();
        this.updateBalls();
    }

    updateCells() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.cells[i][j].update();
            }
        }
    }

    updateBalls() {
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].update();
        }
    }

    show() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                noFill();
                stroke(0);
                strokeWeight(1);
                rect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }
    }
}