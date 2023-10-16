
class gameWin extends Phaser.Scene{
  constructor(){
    super("gameWin")
  }
  init(data) {
    this.score = data.score;
    this.lives = data.lives;
  }
  create(){
    fruits = this.physics.add.group()
    this.background = this.add.image(0,0, "background");
    this.background.setDisplaySize(this.sys.game.config.width * 2, config.height);
    this.background.setOrigin(0.28,0);
    const fontSize = Math.min(config.width, config.height) * 0.07;
    
    const gameOverText = this.add.text(config.width / 2, config.height / 2, `Congratulations!`, { 
      fontSize: fontSize +'px', 
      fill: '#34eb34',
      fontStyle: 'bold',
      stroke: '#000',
      strokeThickness: 10, 
    });
    
    const scoreText = this.add.text(config.width / 2, (config.height / 2) + 100 , `Score: ${this.score}`, { 
      fontSize: fontSize +'px', 
      fill: '#fff',
      fontStyle: 'bold',
      stroke: '#000',
      strokeThickness: 10, 
    });
    const playAgain = this.add.text(config.width / 2, config.height / 2 + 300, 'Play Again', {
      fontSize: fontSize +'px',
      fill: '#3489eb',
      fontStyle: 'bold',
      stroke: '#000',
      strokeThickness: 10, 
    });
    const quittoMain = this.add.text(config.width / 2, config.height / 2 + 400, 'Quit', {
      fontSize: fontSize +'px',
      fill: '#3489eb',
      fontStyle: 'bold',
      stroke: '#000',
      strokeThickness: 10, 
    });
    playAgain.setOrigin(0.5);
    playAgain.setInteractive();
    playAgain.on('pointerdown', () => {
      this.scene.start('playGame', {score: 0, lives: 3});
    });
    quittoMain.setOrigin(0.5);
    quittoMain.setInteractive();
    quittoMain.on('pointerdown', () => {
      this.scene.start('bootGame');
    });
    gameOverText.setOrigin(0.5);
    scoreText.setOrigin(0.5);
    // livesText.setOrigin(0.5);
  }
}