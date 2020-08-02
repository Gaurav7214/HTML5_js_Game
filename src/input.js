export default class InputHandler {
  constructor(player, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          player.moveLeft();
          break;
        case 38:
          player.moveUp();
          break;
        case 39:
          player.moveRight();
          break;
        case 40:
          player.moveDown();
          break;
        case 27:
          game.togglePause();
          break;
        case 32:
          game.start();
          break;
        default:
          console.assert("Wrong key");
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (player.speed.x < 0) player.stopx();
          break;
        case 38:
          if (player.speed.y < 0) player.stopy();
          break;
        case 39:
          if (player.speed.x > 0) player.stopx();
          break;
        case 40:
          if (player.speed.y > 0) player.stopy();
          break;
        default:
          console.assert("Wrong key");
      }
    });
  }
}
