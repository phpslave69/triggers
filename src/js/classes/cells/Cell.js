/**
 * Created by Sergey on 15.03.2018.
 */

class Cell {
    constructor(x, y) {
        this.id = cellId++;
        this.x = x * cellSize + cellSize / 2;
        this.y = y * cellSize + cellSize / 2;
        this.color = 'white';
        this.text = '';
        this.textColor = 'black';
        this.textSize = 14;
        this.getDist = 10;
    }

    getNearBall() {
        let a = [];
        let flag = false;
        for (let i = field.balls.length - 1; i >= 0; i--) {
            if (dist(this.x, this.y, field.balls[i].x, field.balls[i].y) < this.getDist) {
                a.push(i);
                flag = true;
            }
        }
        if (flag) {
            return a;
        }
        return false;
    }

    show() {
        fill(this.color);
        rectMode(CENTER);
        rect(this.x, this.y, cellSize, cellSize);
        textSize(this.textSize);
        noStroke();
        fill(this.textColor);
        text(this.text, this.x - cellSize / 2 + 5, this.y);
        rectMode(CORNER);
    }

    update() {
        return false;
    }
}