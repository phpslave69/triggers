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
        this.getDist = 1;
        this.passedBalls = [];
        this.passed = false;
        this.working = true;
    }

    validate() {
        return false;
    }

    getNearBall() {
        let a = [];
        let flag = false;
        this.passed = false;
        for(let i = field.balls.length - 1; i >= 0; i--) {
            if(dist(this.x, this.y, field.balls[i].x, field.balls[i].y) < this.getDist) {
                a.push(i);
                if(this.passedBalls.includes(i) == false) {
                    this.passedBalls.push(i);
                    this.passed = true;
                }
                flag = true;
            }
        }

        for(let i = 0; i < this.passedBalls.length; i++) {
            if(a.includes(this.passedBalls[i]) == false) {
                this.passedBalls.splice(i, 1);
                break;
            }
        }
        return flag;
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
        if(this.working) {
            fill('green');
        } else {
            fill('red');
        }
        stroke(255);
        ellipse(this.x + cellSize / 2 - 7, this.y - cellSize / 2 + 7, 10, 10);
        noStroke();
    }

    update() {
        return false;
    }
}