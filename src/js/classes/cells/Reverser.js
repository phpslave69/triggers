class Reverser extends Cell{
  constructor(x, y){
    super(x, y);
    this.color = 'blue';
    this.textColor = 'white';
  }

  getDir(dir){
    if(dir == UP){
      return DOWN;
    }
    if(dir == DOWN){
      return UP;
    }
    if(dir == LEFT){
      return RIGHT;
    }
    if(dir == RIGHT){
      return LEFT;
    }
  }

}
