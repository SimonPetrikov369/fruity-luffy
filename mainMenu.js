class mainMenu extends Phaser.Scene{
  constructor(){
    super("bootGame")
  }
  preload(){
    this.load.image("background", "assets/images/background.jpg");
    this.load.image("lupi", "assets/images/luffy.png");
    this.load.image("cherry-pie-1", "assets/images/cherry-pie-1.png");
    this.load.image("cherry-pie-2", "assets/images/cherry-pie-2.png");
    this.load.image("cherry-pie-3", "assets/images/cherry-pie-3.png");
    this.load.image("food1", "assets/images/food1.png");
    this.load.image("food2", "assets/images/food2.png");
    this.load.image("food3", "assets/images/food3.png");
    this.load.image("food4", "assets/images/food4.png");
    this.load.image("food5", "assets/images/food5.png");
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