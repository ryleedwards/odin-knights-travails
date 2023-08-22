import { Gameboard } from './gameboard.js';
export class Knight {
  constructor(gameboard, x = 1, y = 0) {
    this.gameboard = gameboard;
    this.x = x;
    this.y = y;
  }
  move(newX, newY, oldX = this.x, oldY = this.y, gameboard = this.gameboard) {
    const evalMove = function (newX, newY) {
      if (newX < 0 || newY < 0) return false;
      if (Math.abs(oldX - newX) !== 1) return false;
      if (Math.abs(oldY - newY) !== 2) return false;
      if (newX > gameboard.width - 1) return false;
      if (newY > gameboard.height - 1) return false;
      return true;
    };
    if (evalMove(newX, newY)) {
      let oldX = this.x;
      let oldY = this.y;
      this.x = newX;
      this.y = newY;
      console.log(`[${oldX},${oldY}] -> [${this.x},${this.y}]`);
    } else console.log('Illegal move requested');
  }

  knightMoves(start, end) {}
}
