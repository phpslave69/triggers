class ColorReceiver extends Destructor{
	constructor(x, y, color){
		super(x, y);
		this.receiveColor = color;
		this.color = color;
		this.count = 0;
		this.text = 'Receiver\n'+this.count;
		this.textSize = 11;
	}

	checkColor(){
		this.getNearBall();
		if(this.passed){
			let index = this.passedBalls[this.passedBalls.length  - 1];
			let ballColor = field.balls[index].color;
			if(ballColor == this.color){
				this.count++;
			}else{
				this.count--;
			}
			this.text = 'Receiver\n'+this.count;
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