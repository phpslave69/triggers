class RandomDir extends ChangeDir{
	constructor(x, y, lockDir, changeRate){
		super(x, y, lockDir);
		this.textColor = 'black';
		this.color = 'cyan';
		this.lockDir = lockDir;
		this.dirs = [MOVEUP, MOVEDOWN, MOVELEFT, MOVERIGHT];
		this.rate = changeRate;
		this.getDir();
		this.setText();
	}

	getDir(){
		if(tick % this.rate == 0 && ticked){
			while(true){
				this.dir = this.dirs[Math.floor(random(0, 4))];		
				if(this.lockDir.includes(this.dir) == false){
					this.setText();
					break;
				}
			}	
		}
	}

	update(){
		this.getDir();
		this.changeDir();
		this.show();
	}
}