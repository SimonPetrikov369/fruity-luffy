let fruits;
let player;
let score = 0;
let lives = 3;
class Scene3 extends Phaser.Scene{
  constructor(){
    super("play")
  }
  create(){
    fruits = this.add.group()


    this.background = this.add.image(0,0, "background");
    this.background.setDisplaySize(this.sys.game.config.width * 2, config.height);
    this.background.setOrigin(0.28,0);
    player = this.add.sprite(config.width / 2, config.height - 50, 'lupi');
    player.setDisplaySize(this.background.displayWidth / 15, this.background.displayHeight / 15);
    player.setOrigin(0.5, 0.5);
    this.add.existing(player);
    const playerCollider = this.physics.add.overlap(player, fruits, this.collectFruit, null, this);

    const fontSize = Math.min(config.width, config.height) * 0.07;
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
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
    // const image = this.add.image(randomX, 0, randomImageKey);
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
      // If the collected item is 'fruit1', gain 1 point
      score++;
    } else {
      // If not 'fruit1', lose 1 life
      lives--;
      if (lives <= 0) {
        // Implement game over logic if lives reach 0
        // For now, we'll reset the player's lives.
        lives = 3;
      }
    }
    fruit.destroy();
    // Update the score and lives display
    updateScoreAndLives();
  }
  
  updateScoreAndLives() {
    // Update the score and lives display
    // You can use this.scoreText to display the score and this.livesText to display the remaining lives.
    this.scoreText.setText('Score: ' + score);
    this.livesText.setText('Lives: ' + lives);
  }
  
  // The update() function can be used for additional game logic.
  update() {
    // Add any additional game logic here.
  }
  // createFruit(){
  //   this.fruitTypes = ['fruit1', 'fruit2', 'fruit3'];
  //   this.randomFruitType = Phaser.Math.RND.pick(this.fruitTypes);
    // var centerWidth = config.width * 0.75;
    // var startPosition = (config.width - centerWidth) / 2;
    // var randomX = Phaser.Math.Between(startPosition, startPosition + centerWidth);
  //   this.fruit = fruits.create(randomX, 0, this.randomFruitType);
  //   this.tweens.add({
  //     targets: this.fruit,
  //     y: config.height,
  //     duration: Phaser.Math.Between(3000, 5000),
  //     onComplete: () => {
  //       this.fruit.destroy();
  //     },
  //   });
  // }
}