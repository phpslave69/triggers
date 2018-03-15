/**
 * Created by Sergey on 15.03.2018.
 */

class Field {

    constructor() {
        this.width = width;
        this.height = height;
        this.grid = [];
        this.initGrid();
    }

    initGrid() {
        for (let i = 0; i < rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < cols; j++) {
                this.grid[i][j] = new Cell(j, i);
            }
        }
    }

    update() {
        this.show();
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