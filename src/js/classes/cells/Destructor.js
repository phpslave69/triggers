/**
 * Created by Sergey on 16.03.2018.
 */

class Destructor extends Cell {
    constructor(x, y) {
        super(x, y);
        this.color = 'black';
        this.text = 'destroy';
        this.textColor = 'white';
        this.textSize = 13;
        this.getDist = 10;
    }

    destroy() {
        let ballId = this.getNearBall();
        if (ballId !== false) {
            field.balls.splice(ballId, 1);
        }
    }

    update() {
        this.destroy();
        this.show();
    }
}