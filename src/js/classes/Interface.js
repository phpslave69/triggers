/**
 * Created by Sergey on 16.03.2018.
 */

class Interface {
    constructor() {
        this.types = {
            NONE: -1,
            EMPTY: 0,
            SPAWN: 1,
            DESTROY: 2,
            UP: 3,
            RIGHT: 4,
            DOWN: 5,
            LEFT: 6,
            TELEIN: 7,
            TELEOUT: 8,
            COUNTER: 9,
            RANDOM: 10,
            SWITCH:11
        };
        this.menuCells = [

            {
                color: 'green',
                text: 'spawn',
                class: 'Spawn',
                type: this.types.SPAWN
            }, {
                color: 'black',
                text: 'destroy',
                class: 'Destructor',
                type: this.types.DESTROY
            }, {
                color: 'Blue',
                text: 'Up',
                class: 'ChangeDir',
                type: this.types.UP
            }, {
                color: 'Blue',
                text: 'Right',
                class: 'ChangeDir',
                type: this.types.RIGHT
            }, {
                color: 'Blue',
                text: 'Down',
                class: 'ChangeDir',
                type: this.types.DOWN
            }, {
                color: 'Blue',
                text: 'Left',
                class: 'ChangeDir',
                type: this.types.LEFT
            }, {
                color: 'crimson',
                text: 'tele\nIn',
                class: 'Teleport',
                type: this.types.TELEIN
            }, {
                color: 'crimson',
                text: 'tele\nOut',
                class: 'Teleport',
                type: this.types.TELEOUT
            }, {
                color: 'deeppink',
                text: 'counter',
                class: 'Counter',
                type: this.types.COUNTER
            }, {
                color: 'cyan',
                text: 'random',
                class: 'RandomDir',
                type: this.types.RANDOM
            }, {
                color: 'darkorange',
                text: 'switch',
                class: 'Switch',
                type: this.types.SWITCH
            }, {
                color: 'red',
                text: 'remover',
                class: '',
                type: this.types.EMPTY
            }
        ];
        this.state = this.types.NONE;
    }

    showMenu() {
        for (let i = 0; i < this.menuCells.length; i++) {
            fill(this.menuCells[i].color);
            rectMode(CENTER);
            rect(i * cellSize + cellSize / 2, height + cellSize / 2, cellSize, cellSize);
            textSize(12);
            noStroke();
            fill('white');
            text(this.menuCells[i].text, i * cellSize + 5, height + cellSize / 2);
            rectMode(CORNER);
        }
    }

    showCellOnCursor() {
        for (let i = 0; i < this.menuCells.length; i++) {
            if (this.menuCells[i].type == this.state) {
                fill(this.menuCells[i].color);
                rectMode(CENTER);
                rect(mouseX, mouseY, cellSize, cellSize);
                textSize(12);
                noStroke();
                fill('white');
                text(this.menuCells[i].text, mouseX - cellSize / 2 + 5, mouseY);
                rectMode(CORNER);
            }
        }

    }

    setState() {
        if (mouseY > height && mouseY < height + cellSize && mouseX < this.menuCells.length * cellSize) {
            for (let i = 0; i < this.menuCells.length; i++) {
                if (mouseX > i * cellSize && mouseX < (i + 1) * cellSize) {
                    console.log(this.menuCells[i].type);
                    this.state = this.menuCells[i].type;
                    break;
                }
            }
        } else {
            if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && this.state != this.types.NONE) {
                let x = Math.floor(mouseX / cellSize);
                let y = Math.floor(mouseY / cellSize);
                let port;
                switch (this.state) {
                    case this.types.EMPTY:
                        field.cells[x][y] = new Cell(x, y);
                        break;
                    case this.types.COUNTER:
                        field.cells[x][y] = new Counter(x, y);
                        break;
                    case this.types.UP:
                        field.cells[x][y] = new ChangeDir(x, y, MOVEUP);
                        break;
                    case this.types.RIGHT:
                        field.cells[x][y] = new ChangeDir(x, y, MOVERIGHT);
                        break;
                    case this.types.DOWN:
                        field.cells[x][y] = new ChangeDir(x, y, MOVEDOWN);
                        break;
                    case this.types.LEFT:
                        field.cells[x][y] = new ChangeDir(x, y, MOVELEFT);
                        break;
                    case this.types.DESTROY:
                        field.cells[x][y] = new Destructor(x, y);
                        break;
                    case this.types.SPAWN:
                        let speed = prompt('Speed: ~10 - 200');
                        let dir = prompt('Directions: UP RIGHT DOWN LEFT');
                        let rate = prompt('Spawn rate per tick: ~1-3');
                        if (speed < 10 || speed > 200 || isNaN(speed)) {
                            speed = 100;
                        }
                        if (rate < 1 || rate > 10 || isNaN(rate)) {
                            rate = 1;
                        }
                        switch (dir.toLowerCase()) {
                            case 'up':
                                dir = MOVEUP;
                                break;
                            case 'down':
                                dir = MOVEDOWN;
                                break;
                            case 'left':
                                dir = MOVELEFT;
                                break;
                            case 'right':
                                dir = MOVERIGHT;
                                break;
                            default:
                                dir = MOVEDOWN;
                        }
                        field.cells[x][y] = new Spawner(x, y, dir, speed, rate);
                        break;
                    case this.types.TELEIN:
                        port = prompt('Enter port: ');
                        field.cells[x][y] = new Teleport(x, y, TELEIN, port);
                        break;
                    case this.types.TELEOUT:
                        port = prompt('Enter port: ');
                        field.cells[x][y] = new Teleport(x, y, TELEOUT, port);
                        break;
                    case this.types.SWITCH:
                        field.cells[x][y] = new Switch(x, y);
                        break;
                    
                    case this.types.RANDOM:
                        let locked = prompt('Enter locked directions divided with space: LEFT RIGHT UP DOWN');
                        let res = locked.split(" ");
                        let toLock = [];
                        for (let i = 0; i < res.length; i++) {
                            switch (res[i].toLowerCase()) {
                                case 'up':
                                    toLock.push(MOVEUP);
                                    break;
                                case 'down':
                                    toLock.push(MOVEDOWN);
                                    break;
                                case 'left':
                                    toLock.push(MOVELEFT);
                                    break;
                                case 'right':
                                    toLock.push(MOVERIGHT);
                                    break;
                                default:
                                    break;
                            }
                        }
                        field.cells[x][y] = new RandomDir(x, y, toLock, 1);
                }
            }
            this.state = this.types.NONE;
        }
    }

    update() {
        this.showMenu();
        if (this.state != this.types.NONE) {
            this.showCellOnCursor();
        }
    }

}