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
            SWITCH: 11,
            RANDOMSPAWN: 12,
            COLORRECEIVER: 13,
            PATTERNSPAWN: 14,
        };
        this.menuCells = [{
            color: 'green',
            text: 'spawn',
            class: 'ColorSpawner',
            type: this.types.SPAWN
        },{
            color: 'seagreen',
            text: 'pattern\nspawn',
            class: 'PatternSpawner',
            type: this.types.PATTERNSPAWN
        },{
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
            color: 'darkred',
            text: 'random \nspawner',
            class: 'RandomSpawner',
            type: this.types.RANDOMSPAWN
        }, {
            color: 'rosybrown',
            text: 'color\nreceiver',
            class: 'ColorReceiver',
            type: this.types.COLORRECEIVER
        }, {
            color: 'red',
            text: 'remover',
            class: '',
            type: this.types.EMPTY
        }];
        this.state = this.types.NONE;
    }

    showMenu() {
        //render buttons
        for (let i = 0; i < this.menuCells.length; i++) {
            stroke(0);
            strokeWeight(1);
            fill(this.menuCells[i].color);
            rectMode(CENTER);
            rect(i * cellSize + cellSize / 2, height + cellSize / 2, cellSize, cellSize);
            textSize(12);
            fill('white');
            noStroke();
            text(this.menuCells[i].text, i * cellSize + 5, height + cellSize / 2);
            rectMode(CORNER);
        }
        //render clear btn
        fill('red');
        stroke(0);
        strokeWeight(1);
        rectMode(CENTER);
        rect(this.menuCells.length * cellSize + cellSize / 2, height + cellSize / 2, cellSize, cellSize);
        textSize(12);
        noStroke();
        fill('white');
        text('clear', this.menuCells.length * cellSize + 5, height + cellSize / 2);
        rectMode(CORNER);
        
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
        if (mouseY > height && mouseY < height + cellSize && mouseX < (this.menuCells.length + 1) * cellSize) {
            for (let i = 0; i < this.menuCells.length; i++) {
                if (mouseX > i * cellSize && mouseX < (i + 1) * cellSize) {
                    this.state = this.menuCells[i].type;
                    break;
                }
            }
            //show clear btn
            if (mouseX > this.menuCells.length * cellSize && mouseX < (1 + this.menuCells.length) * cellSize) {
                field.initGrid();
            }
        } else {
            if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && this.state != this.types.NONE) {
                //set cell index
                let x = Math.floor(mouseX / cellSize);
                let y = Math.floor(mouseY / cellSize);
                //set port
                let port = 0;
                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        if (field.cells[i][j].port !== undefined && field.cells[i][j].port > port) {
                            port = parseInt(field.cells[i][j].port);
                        }
                    }
                }

                let spawn;
                let dir;
                let rate;
                let speed;
                let ballColor;
                let pattern;
                let res;

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
                    case this.types.COLORRECEIVER:
                        ballColor = prompt('Receiver color: red, blue etc', 'red');
                        if (!checkUndefined([ballColor])) {
                            this.state = this.types.NONE;
                            return false;
                        }
                        field.cells[x][y] = new ColorReceiver(x, y, ballColor);
                        break;
                    case this.types.SPAWN:
                        speed = prompt('Speed: ~10 - 200', 100);
                        dir = prompt('Directions: UP RIGHT DOWN LEFT', 'right');
                        rate = prompt('Spawn rate per tick: ~1-3', 1);
                        ballColor = prompt('Ball color: ', 'red');
                        if (!checkUndefined([dir, speed, rate, ballColor])) {
                            this.state = this.types.NONE;
                            return false;
                        }
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

                        switch (ballColor.toLowerCase()) {
                            case 'white':
                                ballColor = colorNames.WHITE;
                                break;
                            case 'red':
                                ballColor = colorNames.RED;
                                break;
                            case 'blue':
                                ballColor = colorNames.BLUE;
                                break;
                            case 'yellow':
                                ballColor = colorNames.YELLOW;
                                break;
                            default:
                                ballColor = colorNames.WHITE;
                                break;
                        }

                        field.cells[x][y] = new ColorSpawner(x, y, dir, speed, rate, ballColor);
                        break;
                    case this.types.RANDOMSPAWN:
                        speed = prompt('Speed: ~10 - 200', 100);
                        dir = prompt('Directions: UP RIGHT DOWN LEFT', 'right');
                        rate = prompt('Spawn rate per tick: ~1-3', 1);
                        if (!checkUndefined([dir, speed, rate])) {
                            this.state = this.types.NONE;
                            return false;
                        }
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
                                break;
                        }
                        field.cells[x][y] = new RandomSpawner(x, y, dir, speed, rate);
                        break;
                    case this.types.PATTERNSPAWN:
                        speed = prompt('Speed: ~10 - 200', 100);
                        dir = prompt('Directions: UP RIGHT DOWN LEFT', 'right');
                        rate = prompt('Spawn rate per tick: ~1-3', 1);
                        pattern = prompt('Enter pattern: red blue ...', 'red blue');
                        res = pattern.split(" ");
                        console.log(res);
                        for (let i = 0; i < res.length; i++) {
                            for(let c in color){
                                console.log(c.color);
                            }    
                        }
                        if (!checkUndefined([dir, speed, rate, res])) {
                            console.log(1);
                            this.state = this.types.NONE;
                            return false;
                        }
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
                                break;
                        }
                        field.cells[x][y] = new PatternSpawner(x, y, dir, speed, rate, res);
                        break;

                    case this.types.TELEIN:
                        port = prompt('Enter port: ', port + 1);
                        if (!checkUndefined([port])) {
                            this.state = this.types.NONE;
                            return false;
                        }
                        field.cells[x][y] = new Teleport(x, y, TELEIN, port);
                        break;
                    case this.types.TELEOUT:
                        port = prompt('Enter port: ', port);
                        if (!checkUndefined([port])) {
                            this.state = this.types.NONE;
                            return false;
                        }
                        field.cells[x][y] = new Teleport(x, y, TELEOUT, port);
                        break;
                    case this.types.SWITCH:
                        field.cells[x][y] = new Switch(x, y);
                        break;

                    case this.types.RANDOM:
                        let locked = prompt('Enter locked directions divided with space: LEFT RIGHT UP DOWN');
                        if (!checkUndefined([locked])) {
                            this.state = this.types.NONE;
                            return false;
                        }
                        res = locked.split(" ");
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
                        break;
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