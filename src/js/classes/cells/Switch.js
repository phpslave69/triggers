class Switch extends Cell {
    constructor(x, y) {
        super(x, y);
        this.text = 'switch';
        this.color = 'darkorange';
        this.connected = false;
    }

    switchCell() {
        this.getNearBall();
        if (this.passed) {
            field.cells[this.connected[0]][this.connected[1]].working = !field.cells[this.connected[0]][this.connected[1]].working;
        }
        return false;
    }

    update() {
        if (this.connected == false) {
            this.text = 'Not \nconnected';
            this.textSize = 11;

        } else {
            this.switchCell();
            this.text = 'Switch';
        }
        this.show();
    }

}