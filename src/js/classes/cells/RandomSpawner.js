class RandomSpawner extends Spawner{
	constructor(x, y, dir, speed, spawnrate){
		super(x, y, dir, speed, spawnrate);
		this.text = 'random \nspawner';
		this.color = 'darkred';
		
	}

	spawn() {
        if (ticked && tick % this.rate == 0) {
        	let id = Math.floor(random(0, colors.length));
        	let ballColor = colors[id].color;
            field.balls.push(new Ball(this.x, this.y, this.dir, this.speed, ballColor));
        }
    }

}