class mainMenu extends Phaser.Scene{
  constructor(){
    super("bootGame")
  }
  preload(){
    this.load.image("background", "assets/images/background.jpg", {frameWidth: 16, frameHeight: 16});
    this.load.image("fruit1", "assets/images/gomugomu.png");
    this.load.image("fruit2", "assets/images/kagekage.png");
    this.load.image("fruit3", "assets/images/meramera.png");
    this.load.image("fruit4", "assets/images/opeope.png");
    this.load.image("lupi", "assets/images/luffy.png");

  }
  create() {
    this.background = this.add.image(0,0, "background");
    this.background.setDisplaySize(this.sys.game.config.width * 2, config.height);
    this.background.setOrigin(0.28,0);
    const fontSize = Math.min(config.width, config.height) * 0.07;
    const startButton = this.add.text(config.width / 2, config.height / 2, 'Start', {
      fontSize: fontSize+'px',
      fontStyle: 'bold',
      fill: '#fff',
      stroke: '#000',
      strokeThickness: 10,
    });
    startButton.setOrigin(0.5);

    startButton.setInteractive();

    startButton.on('pointerdown', () => {
      this.scene.start('playGame', {score: 0, lives: 3});
    });
    const howtoButton = this.add.text(config.width / 2, config.height / 2 + 100 , 'How to Play', {
      fontSize: fontSize+'px',
      fontStyle: 'bold',
      fill: '#fff',
      stroke: '#000',
      strokeThickness: 10,
    });
    howtoButton.setInteractive();

    howtoButton.on('pointerdown', () => {
      this.scene.start('howtoPlay');
    });
    startButton.setOrigin(0.5);
    howtoButton.setOrigin(0.5);
    startButton.setInteractive();
  }
}