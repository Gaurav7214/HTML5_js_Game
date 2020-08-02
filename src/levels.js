import Obstacle from "/src/obstacle.js";

export function buildLevel(game, level) {
  let obstacles = [];

  let dict = {
    0: 80,
    1: 150,
    2: 250,
    3: 350,
    4: 450,
    5: 550
  };

  level.forEach((row, rowIndex) => {
    let y = dict[rowIndex];
    let speed = Math.floor(Math.random() * 4 + 3);
    row.forEach((obstacle, obstacleIndex) => {
      if (obstacle === 1) {
        let x = obstacleIndex * 148;
        obstacles.push(new Obstacle(game, x, y, speed));
      }
    });
  });

  return obstacles;
}

export const level1 = [
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
];

export const level2 = [
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
];

export const level3 = [
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0]
];

export const level4 = [
  [1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 0]
];

export const level5 = [
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
  [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
];
