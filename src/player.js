export default class Player {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.img = document.getElementById("img_player");
    this.width = 100;
    this.height = 100;

    this.maxSpeed = {
      x: 7,
      y: 7
    };
    this.reset();
  }

  reset() {
    this.speed = {
      x: 0,
      y: 0
    };

    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight - this.height
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#0ff";
    var image = new Image();  // see note on creating an image
    image.src = "assets/images/austronaut.png";
    image.onload = function() {
      ctx.drawImage(
        this,
        Player.position.x,
        Player.position.y,
        Player.width,
        Player.height
      );
    }
  }

  update(deltatime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y + this.height > this.gameHeight)
      this.position.y = this.gameHeight - this.height;
  }

  moveLeft() {
    this.speed.x = -this.maxSpeed.x;
  }

  moveUp() {
    this.speed.y = -this.maxSpeed.y;
  }

  moveRight() {
    this.speed.x = this.maxSpeed.x;
  }

  moveDown() {
    this.speed.y = this.maxSpeed.y;
  }

  stopx() {
    this.speed.x = 0;
  }
  stopy() {
    this.speed.y = 0;
  }
}
