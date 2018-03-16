class Counter extends Cell{
	constructor(x, y){
		super(x,y);
		this.color = 'deeppink';
		this.text = 0;
		this.counted = [];
	}

	counter(){
		let balls = this.getNearBall();
		if (balls !== false) {
            for (let i = 0; i < balls.length; i++) {
                if (this.counted.includes(field.balls[balls[i]].id)) {
                	for(let i = this.counted.length - 1; i >= 0 ; i--){
                		for(let j = 0; j < field.balls.length; j++){
                			if(this.counted[i] == field.balls[j].id){
                				if(dist(this.x, this.y, field.balls[j].x,field.balls[j].y) > 10 + this.getDist){
                					this.counted.splice(i, 1);
                				}
                			}
                		}
                	}
                    continue;
                }else{
                	this.counted.push(field.balls[balls[i]].id);
                	this.text++;

                }
                
            }
        }
	}

	update(){
		this.show();
		this.counter();
	}
}