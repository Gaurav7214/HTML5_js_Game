const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4,
  GAMEFINISHED: 5
};

export default class Pikachu {
  constructor(game) {
    this.game = game;
    this.image = document.getElementById("img_pikachu");
    this.position = {
      x: Math.floor(Math.random() * 1000 + 200),
      y: 0
    };
    this.width = 80;
    this.height = 80;
  }

  draw(ctx) {
    var image = new Image();  // see note on creating an image
    image.src = "assets/images/pokemon.png";
    image.onload = function() {
      ctx.drawImage(
        this,
        Pikachu.position.x,
        Pikachu.position.y,
        Pikachu.width,
        Pikachu.height
      );
    }
  }

  update(player) {
    if (
      Math.abs(player.position.x - this.position.x) < 40 &&
      Math.abs(player.position.y - this.position.y) < 40
    ) {
      var audioType;
      var audio = new Audio();
      if (audio.canPlayType("audio/mp3")) {
        audioType = ".mp3";
      } else {
        audioType = ".wav";
      }
      if (this.game.currentLevel === 4) {
        audio = new Audio("/assets/music/pikachu" + audioType);
      } else {
        audio = new Audio("/assets/music/pikachu_sms" + audioType);
      }
      audio.play();

      this.game.currentLevel++;
      if (this.game.currentLevel <= 4) {
        this.game.gamestate = GAMESTATE.NEWLEVEL;
        this.game.start();
      } else {
        this.game.gamestate = GAMESTATE.GAMEFINISHED;
        this.game.start();
      }
    }
  }
}
