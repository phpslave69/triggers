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
        this.getNearBall();
        for(let i = 0; i < this.passedBalls.length; i++){
            field.balls.splice(this.passedBalls[i], 1);
        }
    }

    update() {
        this.show();
        if(this.working == false){
            return false;
        }
        this.destroy();
        
    }
}