class Scene1 extends Phaser.Scene{
  constructor(){
    super("bootGame")
  }
  preload(){
    this.load.sprite
    this.load.image("background", "assets/images/background.jpg", {frameWidth: 16, frameHeight: 16});
    this.load.image("fruit1", "assets/images/gomugomu.png");
    this.load.image("fruit2", "assets/images/kagekage.png");
    this.load.image("fruit3", "assets/images/meramera.png");
    this.load.image("fruit4", "assets/images/opeope.png");
    this.load.image("lupi", "assets/images/luffy.png");

  }
  create() {
    this.scene.start('play');
    // const startButton = this.add.text(config.width / 2, config.height / 2, 'Start', {
    //   fontSize: '32px',
    //   fill: '#fff',
    // });
    // startButton.setOrigin(0.5);

    // startButton.setInteractive();

    // startButton.on('pointerdown', () => {
    //   this.scene.start('playGame');
    // });
  }
}