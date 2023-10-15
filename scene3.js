let fruits;
let player;
let score = 0;
let lives = 3;
class Scene3 extends Phaser.Scene{
  constructor(){
    super("play")
  }
  create(){
    fruits = this.physics.add.group()
    this.background = this.add.image(0,0, "background");
    this.background.setDisplaySize(this.sys.game.config.width * 2, config.height);
    this.background.setOrigin(0.28,0);
    player = this.add.sprite(config.width / 2, config.height - 50, 'lupi');
    player.setDisplaySize(this.background.displayWidth / 15, this.background.displayHeight / 15);
    player.setOrigin(0.5, 0.75);
    this.physics.add.existing(player);
    player.setInteractive({ draggable: true });
    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      
      gameObject.x = dragX;
    });
    this.physics.add.overlap(player, fruits, this.collectFruit, null, this);

    const fontSize = Math.min(config.width, config.height) * 0.07;
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: fontSize + 'px',
      fill: '#fff',
    });
    this.livesText = this.add.text(16, 16 + this.scoreText.displayHeight, 'Lives: 3', {
      fontSize: fontSize + 'px',
      fill: '#fff',
    });
    this.imagesArray = ['fruit1', 'fruit2', 'fruit3', 'fruit4', 'lupi'];
    this.time.addEvent({
      delay: Phaser.Math.Between(1000, 3000), // Random delay between 1 to 3 seconds.
      callback: this.createRandomImage,
      callbackScope: this,
      loop: true,
    });
  }
  createRandomImage() {
    const randomImageKey = Phaser.Math.RND.pick(this.imagesArray);
    const x = Phaser.Math.Between(0, config.width);
    const y = Phaser.Math.Between(0, config.height);
    var centerWidth = config.width * 0.75;
    var startPosition = (config.width - centerWidth) / 2;
    var randomX = Phaser.Math.Between(startPosition, startPosition + centerWidth);
    const fruit = fruits.create(randomX, 0, randomImageKey);
    fruit.setDisplaySize(this.background.displayWidth / 15, this.background.displayHeight / 15);

    this.tweens.add({
      targets: fruit,
      y: config.height,
      duration: Phaser.Math.Between(3000, 5000),
      onComplete: () => {
        fruit.destroy()
      }
    })
  }
  collectFruit(player, fruit) {
    if (fruit.texture.key === 'fruit1') {
      console.log('Collected fruit1');
      score++;
    } else {
      console.log('Lost a life');
      lives = Math.max(0, lives - 0.5);
    }

    fruit.destroy();
    this.updateScoreAndLives();
  }

  updateScoreAndLives() {

    this.scoreText.setText('Score: ' + score);
    this.livesText.setText('Lives: ' + lives);
  }
}