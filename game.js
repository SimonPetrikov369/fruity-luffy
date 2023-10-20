const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: true, 
  scene: [ mainMenu, howtoPlay, playGame, gameOver, gameWin],
  physics: {
    default: 'arcade', 
    arcade: {
      gravity: { y: 0 },
    },
  },
}
var game = new Phaser.Game(config);
// window.onload = function(){
  
// }

