
class Scene2 extends Phaser.Scene{
  constructor(){
    
    super("playGame")
  }
  create(){
    this.background = this.add.image(0,0, "background"); 
    this.background.setOrigin(0.25,0)
    this.ship1 = this.add.image(config.width/2 - 50, config.height/2, "ship1");
    this.ship2 = this.add.image(config.width/2 , config.height/2, "ship2");
    this.ship3 = this.add.image(config.width/2 + 50, config.height/2, "ship3");
    this.resetShipPos(this.ship1);
    this.resetShipPos(this.ship2);
    this.resetShipPos(this.ship3);

    this.scaleship(this.ship1);
    this.scaleship(this.ship2);
    this.scaleship(this.ship3);
    const fontSize = Math.min(config.width, config.height) * 0.07;
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: fontSize + 'px',
      fill: '#fff',
    });
  }
  //generate fruits

  //update
  update(){
    this.moveship(this.ship1,  this.generateRandomSpeed());
    this.moveship(this.ship2, 2);
    this.moveship(this.ship3, 3);
  }
  updateScore(points) {
    score += points;
    this.scoreText.setText('Score: ' + score);
  }
  resetScore() {
    score = 0;
    this.scoreText.setText('Score: 0');
  }
  moveship(ship, speed){
    ship.y+=speed;
    if (ship.y > config.height){
      this.resetShipPos(ship);
    }
  }

  generateRandomSpeed() {
    // Adjust these values to set the range of the random speed
    const minSpeed = 1; // Minimum speed
    const maxSpeed = 4; // Maximum speed
  
    return Phaser.Math.Between(minSpeed, maxSpeed);
  }
  //reset
  resetShipPos(ship){
    ship.y = 0;
    var centerWidth = config.width * 0.75; // 75% of config.width
    var startPosition = (config.width - centerWidth) / 2; // Left-most position for the centered area
    var randomX = Phaser.Math.Between(startPosition, startPosition + centerWidth);
    ship.x = randomX;
  }
  scaleship(ship){
    const scalePercentage = 0.07; // 7% of config.width and config.height
    const scaleFactor = Math.min(config.width, config.height) * scalePercentage / Math.max(ship.width, ship.height);
    ship.setScale(scaleFactor);
  }
  
}