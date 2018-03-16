/**
 * Created by Sergey on 15.03.2018.
 */

class Cell {
    constructor(x, y) {
        this.x = x * cellSize + cellSize / 2;
        this.y = y * cellSize + cellSize / 2;
        this.color = 'white';
    }
    
    show() {
        fill(this.color);
        rectMode(CENTER);
        rect(this.x, this.y, cellSize, cellSize);
        rectMode(CORNER);
    }

    update() {
        return false;
    }
}