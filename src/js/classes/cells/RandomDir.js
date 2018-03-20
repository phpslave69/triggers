class RandomDir extends ChangeDir {
    constructor(x, y, lockDir, changeRate) {
        super(x, y, lockDir);
        this.textColor = 'black';
        this.color = 'cyan';
        this.lockDir = lockDir;
        this.dirs = [MOVEUP, MOVEDOWN, MOVELEFT, MOVERIGHT];
        this.rate = changeRate;
        this.setText();
    }

    getDir() {
        this.changeDir();
        if (this.passed) {
            while (true) {
                this.dir = this.dirs[Math.floor(random(0, 4))];
                if (this.lockDir.includes(this.dir) == false) {
                    this.setText();
                    break;
                }
            }
        }
    }

    update() {
        this.show();
        if (this.working == false) {
            return false;
        }
        this.getDir();
    }

}