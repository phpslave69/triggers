class PatternSpawner extends Spawner{
	constructor(x, y, dir, speed, rate, pattern){
		super(x, y, dir, speed, rate);
		this.pattern = pattern;
		this.text = 'pattern\nspawn';
		this.color = 'seagreen';
		this.turn = 0;
	}

	spawn(){
		if (ticked && tick % this.rate == 0) {
            field.balls.push(new Ball(this.x, this.y, this.dir, this.speed,
                this.pattern[this.turn]));
           	this.turn++;
           	if(this.turn >= this.pattern.length){
           		this.turn = 0;
           	}
        }		
		//console.log(this.pattern);
	}
}