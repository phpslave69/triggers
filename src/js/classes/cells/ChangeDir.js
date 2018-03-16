/**
 * Created by Sergey on 16.03.2018.
 */

class ChangeDir extends Cell {
    constructor(x, y, dir) {
        super(x, y);
        this.dir = dir;
        this.color = 'blue';
        this.textColor = 'white';
        this.textSize = 13;
        this.getDist = 3;
        this.setText();
    }

    setText() {
        switch (this.dir) {
            case STOP:
                this.text = 'Stop';
                break;
            case MOVEUP:
                this.text = 'Up';
                break;
            case MOVEDOWN:
                this.text = 'Down';
                break;
            case MOVELEFT:
                this.text = 'Left';
                break;
            case MOVERIGHT:
                this.text = 'Right';
                break;
        }
    }

    changeDir() {
        let balls = this.getNearBall();
        if (balls !== false) {
            for (let i = 0; i < balls.length; i++) {
                if (field.balls[balls[i]].dir == this.dir) {
                    continue;
                }
                field.balls[balls[i]].dir = this.dir;
                field.balls[balls[i]].x = this.x;
                field.balls[balls[i]].y = this.y;
            }
        }
    }

    update() {
        this.show();
        this.changeDir();
    }

}
