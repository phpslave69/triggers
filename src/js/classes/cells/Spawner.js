/**
 * Created by Sergey on 16.03.2018.
 */

class Spawner extends Cell {
    constructor(x, y, dir, speed, spawnrate, ballColor) {
        super(x, y);
        this.dir = dir;
        this.rate = spawnrate;
        this.speed = speed;
        this.color = 'green';
        this.text = 'spawn';
        this.textColor = 'white';
        this.ballColor = ballColor;
    }

    spawn() {
        if (ticked && tick % this.rate == 0) {
            field.balls.push(new Ball(this.x, this.y, this.dir, this.speed,
                colors[this.ballColor].color));
        }
    }

    update() {
        this.show();
        if (this.working == false) {
            return false;
        }
        this.spawn();
    }
}