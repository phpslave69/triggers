/**
 * Created by Sergey on 16.03.2018.
 */

class Spawner extends Cell {
    constructor(x, y, dir, speed, spawnrate) {
        super(x, y);
        this.dir = dir;
        this.rate = spawnrate;
        this.speed = speed;
        this.color = 'green';
    }

    spawn() {
        if (ticked && tick % this.rate == 0) {
            field.balls.push(new Ball(this.x, this.y, this.dir, this.speed));
        }
    }

    update() {
        this.show();
        this.spawn();
    }
}