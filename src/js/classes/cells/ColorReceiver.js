class ColorReceiver extends Destructor{
	constructor(x, y, color){
		super(x, y);
		this.receiveColor = color;
		this.color = color;
		this.text = 0;
	}

	checkColor(){
		this.getNearBall();
		if(this.passed){
			let index = this.passedBalls[this.passedBalls.length  - 1];
			let ballColor = field.balls[index].color;
			console.log(ballColor);
			if(ballColor == this.color){
				this.text++;
			}else{
				this.text--;
			}
		}
	}

	update() {
        this.show();
        if(this.working == false){
            return false;
        }
        this.checkColor();
        this.destroy();
        
    }
}