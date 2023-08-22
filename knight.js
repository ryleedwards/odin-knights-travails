import { Gameboard } from './gameboard.js';
export class Knight {
  constructor(x = 1, y = 0, gameboard) {
    this.x = x;
    this.y = y;
  }
  move(newX, newY) {
    const evalMove = function (newX, newY) {
      if (newX < 0 || newY < 0) return false;
      if (Math.abs(this.x - newX) !== 1) return false;
      if (Math.abs(this.y - newY) !== 2) return false;
      if (newX > gameboard.width - 1) return false;
      if (newY > gameboard.height - 1) return false;
      return true;
    };
    if (evalMove) {
    }
  }
}
