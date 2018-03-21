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
        for(let i = 0; i < cols; i++) {
            this.cells[i] = [];
            for(let j = 0; j < rows; j++) {
                this.cells[i][j] = new Cell(j, i);
            }
        }
    }

    addInitCells() {
        this.cells[0][1] = new Spawner(0, 1, MOVERIGHT, 100, 1, colorNames.RED);
        this.cells[13][1] = new Destructor(13, 1);
        this.cells[3][1] = new ChangeDir(3, 1, MOVEDOWN);
        this.cells[3][3] = new Counter(3, 3);
        this.cells[5][3] = new Counter(5, 3);
        this.cells[3][6] = new RandomDir(3, 6, [MOVEUP, MOVELEFT], 1);
        this.cells[3][8] = new ChangeDir(3, 8, MOVERIGHT);
        this.cells[6][8] = new Teleport(6, 8, TELEIN, 1);
        this.cells[2][6] = new Teleport(2, 6, TELEOUT, 1);
        this.cells[5][6] = new ChangeDir(5, 6, MOVEUP);
        this.cells[5][1] = new ChangeDir(5, 1, MOVERIGHT);
        this.cells[5][2] = new Switch(5, 2);
    }

    update() {
        this.show();
        this.updateCells();
        this.updateBalls();
    }

    updateCells() {
        for(let i = 0; i < cols; i++) {
            for(let j = 0; j < rows; j++) {
                this.cells[i][j].update();
            }
        }
    }

    updateBalls() {
        for(let i = 0; i < this.balls.length; i++) {
            this.balls[i].update();
        }
    }

    show() {
        for(let i = 0; i < cols; i++) {
            for(let j = 0; j < rows; j++) {
                noFill();
                stroke(0);
                strokeWeight(1);
                rect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }
    }
}