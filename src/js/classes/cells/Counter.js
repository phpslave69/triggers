class Counter extends Cell{
	constructor(x, y){
		super(x,y);
		this.color = 'deeppink';
		this.count = 0;
		this.text = 'Counter\n'+this.count;
		this.textColor = 'white';
		this.counted = [];
		this.textSize = 12;
	}

	counter(){
		this.getNearBall();
        if(this.passed){
        	this.count++;
        	this.text = 'Counter\n'+this.count;
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