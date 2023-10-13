

class Scene3 extends Phaser.Scene{
  constructor(){
    super("play")
  }
  create(){
    this.background = this.add.image(0,0, "background");
    
    this.background.setOrigin(0.25,0);
    this.fruits = this.add.group();

    this.time.addEvent({
      delay: 1000, // Milliseconds between fruit spawns
      callback: () => {
        this.createMovingImage();
      },
      loop: true,
    });
    const fontSize = Math.min(config.width, config.height) * 0.07;
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: fontSize + 'px',
      fill: '#fff',
    });
  }
  //update
  update(){
    if(this.frut){
      this.frut.y += this.generateRandomSpeed()
    }
  }
  updateScore(points) {
    score += points;
    this.scoreText.setText('Score: ' + score);
  }
  resetShipPos(ship){
    ship.y = 0;
    var centerWidth = config.width * 0.75; // 75% of config.width
    var startPosition = (config.width - centerWidth) / 2; // Left-most position for the centered area
    var randomX = Phaser.Math.Between(startPosition, startPosition + centerWidth);
    ship.x = randomX;
  }
  //move
  moveship(ship, speed){
    ship.y+=speed;
    if (ship.y > config.height){
      this.resetShipPos(ship);
    }
  }
  //generate
  createMovingImage(){
    this.randomFruitImage = Phaser.Math.RND.pick(['fruit1', 'fruit2', 'fruit3']);
    var centerWidth = config.width * 0.75; // 75% of config.width
    var startPosition = (config.width - centerWidth) / 2; // Left-most position for the centered area
    var randomX = Phaser.Math.Between(startPosition, startPosition + centerWidth);
    this.frut = this.fruits.create(randomX, 0, this.randomFruitImage);

    this.moveship(this.frut, this.generateRandomSpeed())
  }
  resetShipPos(ship){
    ship.y = 0;
    var centerWidth = config.width * 0.75; // 75% of config.width
    var startPosition = (config.width - centerWidth) / 2; // Left-most position for the centered area
    var randomX = Phaser.Math.Between(startPosition, startPosition + centerWidth);
    ship.x = randomX;
  }
  //metrics
  generateRandomSpeed() {
    const minSpeed = 1; 
    const maxSpeed = 10;
    return Phaser.Math.Between(minSpeed, maxSpeed);
  }  
}