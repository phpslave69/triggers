/**
 * Created by Sergey on 16.03.2018.
 */

class Destructor extends Cell {
    constructor(x, y) {
        super(x, y);
        this.color = 'black';
    }

    destroy() {
        for (let i = field.balls.length - 1; i >= 0; i--) {
            if (dist(this.x, this.y, field.balls[i].x, field.balls[i].y) < 10) {
                field.balls.splice(i, 1);
            }
        }
    }

    update() {
        this.destroy();
        this.show();
    }
}