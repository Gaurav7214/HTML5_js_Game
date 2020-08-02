export default class Obstacle {
  constructor(game, x, y, speed) {
    this.game = game;
    this.image = document.getElementById("img_obstacle");
    this.position = {
      x: x,
      y: y
    };
    this.width = 60;
    this.height = 60;
    this.speed = speed;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(player) {
    this.position.x -= this.speed;

    if (this.position.x < 0) this.position.x = 1480;

    if (
      Math.abs(player.position.x - this.position.x) < 40 &&
      Math.abs(player.position.y - this.position.y) < 40
    ) {
      this.game.lives--;
      player.reset();
    }
  }
}
