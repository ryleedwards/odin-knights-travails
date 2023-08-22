export class Gameboard {
  constructor(height = 8, width = 8) {
    this.height = height;
    this.width = width;
  }
  move(newX, newY) {
    const evalMove = function (newX, newY) {
      if (Math.abs(this.x - newX) !== 1) return false;
      if (Math.abs(this.y - newY) !== 3) return false;
    };
  }
}
