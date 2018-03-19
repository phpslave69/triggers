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
        let flag = false;
        if (this.getNearBall()) {
            for (let i = 0; i < this.passedBalls.length; i++) {
                if (field.balls[this.passedBalls[i]].dir == this.dir) {
                    continue;
                }
                flag = true;
                field.balls[this.passedBalls[i]].dir = this.dir;
                field.balls[this.passedBalls[i]].x = this.x;
                field.balls[this.passedBalls[i]].y = this.y;
            }
        }
        return flag;
    }

    update() {
        this.show();
        if(this.working == false){
            return false;
        }
        this.changeDir();
    }

}
