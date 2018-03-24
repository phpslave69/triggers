class ColorSpawner extends Spawner{
	constructor(x, y, dir, speed, spawnrate, ballColor){
		super(x, y, dir, speed, spawnrate);
		this.ballColor = ballColor;
	}
}