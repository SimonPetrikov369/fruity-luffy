

const { Scene, Game } = Phaser;
const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000,
  scene: [ Scene1, Scene2, Scene3]
}

let fruitSpawnDelay = 2000; // Delay in milliseconds between fruit spawns
let nextFruitSpawnTime = 0; // Time to spawn the next fruit

let score = 0;
let  game = new Game(config);
window.onload = function(){
  
  var game = new Phaser.Game(config);
}

