class Counter extends Cell{
	constructor(x, y){
		super(x,y);
		this.color = 'deeppink';
		this.text = 0;
		this.textColor = 'white';
		this.counted = [];
	}

	counter(){
		this.getNearBall();
        if(this.passed){
        	this.text++;
        }
	}

	update(){
		this.show();
		if(this.working == false){
            return false;
        }
		this.counter();
	}
}