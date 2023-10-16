class howtoPlay extends Phaser.Scene{
  constructor(){
    super("howtoPlay")
  }
  create(){
    this.background = this.add.image(0,0, "background");
    this.background.setDisplaySize(this.sys.game.config.width * 2, config.height);
    this.background.setOrigin(0.28,0);
    
  }
}