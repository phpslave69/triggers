class Teleport extends Cell {
    constructor(x, y, type, port) {
        super(x, y);
        this.type = type;
        this.port = port;
        this.color = 'crimson';
        this.textColor = 'white';
        this.setText();
    }

    setText() {
        if (this.type == TELEIN) {
            this.text = 'tele\nIn ' + this.port;
        } else {
            this.text = 'tele\nOut ' + this.port;
        }
    }

    teleport() {
        let link = [0, 0];
        let flag = false;
        for (let i = 0; i < field.cells.length; i++) {
            for (let j = 0; j < field.cells[i].length; j++) {
                if (field.cells[i][j].port == this.port && field.cells[i][j].id != this.id && field.cells[i][j].type != this.type) {
                    link[0] = i;
                    link[1] = j;
                    flag = true;
                    break;
                }
            }
        }
        let balls = this.getNearBall();
        if (balls !== false) {
            for (let i = 0; i < balls.length; i++) {
                if (flag) {
                    field.balls[balls[i]].x = field.cells[link[0]][link[1]].x;
                    field.balls[balls[i]].y = field.cells[link[0]][link[1]].y;
                }

            }
        }
    }

    update() {
        if (this.type == TELEIN) {
            this.teleport();
        }
        this.show();
    }
}