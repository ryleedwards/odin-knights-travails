const board = [];
const rows = 8;
const cols = 8;

class Node {
  constructor(row, col, distance) {
    this.row = row;
    this.col = col;
    this.distance = distance;
  }
  getPositionString() {
    return `${this.row}, ${this.col}`;
  }

  getMoves(visited) {
    const moves = [];
    // define available moves for a Knight
    const directions = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];

    // use the available moves to build available moves in-bounds
    for (let direction of directions) {
      const newRow = this.row + direction[0];
      const newCol = this.col + direction[1];
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        moves.push(new Node(newRow, newCol, this.distance + 1));
      }
    }

    return moves;
  }
}

const knightMoves = (src, dst) => {
  const path = [];
  const queue = [];
  const visited = new Set();
  const start = new Node(src[0], src[1], 0);
  queue.push(start);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visited.add(currentNode.getPositionString());
    //get available moves
    const availableMoves = currentNode.getMoves(visited);
    availableMoves.forEach((node) => console.log(node));
  }

  return path;
};

console.log(knightMoves([0, 0], [1, 2]));

function isPositionOnBoard(r, c) {
  if (r < 0 || r > rows - 1 || c < 0 || c > cols - 1) return false;
  else return true;
}
