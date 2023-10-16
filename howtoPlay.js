class howtoPlay extends Phaser.Scene{
  constructor(){
    super("howtoPlay")
  }
  create(){
    this.background = this.add.image(0,0, "background");
    this.background.setDisplaySize(this.sys.game.config.width * 2, config.height);
    this.background.setOrigin(0.28,0);
    const steps = [
      "1. Collect the correct fruits to score points.",
      "2. Avoid collecting the wrong fruits to save lives.",
      "3. Reach a high score (50 points) to win the game!",
    ];
    const fontSize = Math.min(config.width, config.height) * 0.07;
    const stepText = this.add.text(config.width / 2, (config.height / 2) + 50, steps, {
      fontSize: fontSize +'px',
      fill: "#fff",
      stroke: '#000',
      strokeThickness: 5, 
      wordWrap: { width: config.width - 100 },
      align: "center"
    });
    const howtoPlayText = this.add.text(config.width / 2, (config.height / 3), 'How to Play', {
      fontSize: fontSize +'px',
      fill: '#fff',
      fontStyle: 'bold',
      stroke: '#000',
      strokeThickness: 10, 
    });
    const quit = this.add.text(config.width / 2, (config.height / 2) +500, 'Back', {
      fontSize: fontSize +'px',
      fill: '#fff',
      fontStyle: 'bold',
      stroke: '#000',
      strokeThickness: 10, 
    });
    quit.setInteractive();
    quit.on('pointerdown', () => {
      this.scene.start('bootGame');
    });
    quit.setOrigin(0.5);
    howtoPlayText.setOrigin(0.5);
    stepText.setOrigin(0.5);
  }
}