

const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000,
  scene: [ mainMenu, playGame, gameOver],
  physics: {
    default: 'arcade', // You can use a different physics engine if needed
    arcade: {
      gravity: { y: 0 }, // Adjust gravity as needed
    },
  },
}
window.onload = function(){
  var game = new Phaser.Game(config);
}

