class Counter extends Cell{
	constructor(x, y){
		super(x,y);
		this.color = 'deeppink';
		this.text = 0;
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
		this.counter();
	}
}