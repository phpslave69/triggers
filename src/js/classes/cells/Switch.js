class Switch extends Cell{
	constructor(x, y){
		super(x, y);
		this.text = 'switch';
		this.color = 'darkorange';
		this.connect();
	}

	connect(){
		return false;
	}

	update(){
		this.show();
	}

}