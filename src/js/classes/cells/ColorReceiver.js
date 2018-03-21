class ColorReceiver extends Destructor{
	constructor(x, y, color){
		super(x, y);
		this.receiveColor = color;
		this.color = color;
	}

	checkColor(){
		if(this.passed){
			console.log(this.passedBalls);
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