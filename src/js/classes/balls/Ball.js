/**
 * Created by Sergey on 15.03.2018.
 */

class Ball {
    constructor(x, y, dir, speed) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.speed = speed / 100;
    }

    update() {
        this.show();
        this.move();
    }

    move() {
        switch (this.dir) {
            case STOP:
                break;
            case MOVEUP:
                this.y -= this.speed;
                break;
            case MOVEDOWN:
                this.y += this.speed;
                break;
            case MOVELEFT:
                this.x -= this.speed;
                break;
            case MOVERIGHT:
                this.x += this.speed;
                break;
        }
        //if the bal have reached the border
        if (this.x >= width - cellSize / 2 + 1) {
            this.x = width - cellSize / 2;
            this.dir = STOP;
        }

        if (this.x <= cellSize / 2 - 1) {
            this.x = cellSize;
            this.dir = STOP;
        }

        if (this.y >= height - cellSize / 2 + 1) {
            this.x = height - cellSize / 2;
            this.dir = STOP;
        }

        if (this.y <= cellSize / 2 - 1) {
            this.x = cellSize / 2;
            this.dir = STOP;
        }
    }

    show() {
        fill('red');
        noStroke();
        ellipse(this.x, this.y, cellSize / 2, cellSize / 2);
    }
}