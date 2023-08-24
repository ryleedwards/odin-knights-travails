const board = [];
const rows = 8;
const cols = 8;

class Node {
  constructor(row, col, distance) {
    this.row = row;
    this.col = col;
    this.distance = distance;
    // Path - how did I get here? arr of previous nodes visited
    this.path = [];
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
        //avoid move if it's been visited already
        if (!visited.has(`${newRow}, ${newCol}`))
          moves.push(new Node(newRow, newCol, this.distance + 1));
      }
    }

    return moves;
  }
}

const knightMoves = (src, dst) => {
  const queue = [];
  const visited = new Set();
  // Start with a new node based off source parameter formatted [r, c]
  queue.push(new Node(src[0], src[1], 0));

  while (queue.length > 0) {
    // shift off node to evaluate
    const currentNode = queue.shift();
    // add node's position to its path array
    currentNode.path.push([currentNode.row, currentNode.col]);
    // add to visited set so it's not duplicated
    visited.add(currentNode.getPositionString());
    // has our destination node been reached? if yes, exit with a return
    // of path to get here
    if (currentNode.row === dst[0] && currentNode.col === dst[1]) {
      return currentNode.path;
    }
    // ... since we haven't reached destination ...
    // get available moves
    const availableMoves = currentNode.getMoves(visited);
    // for each available move:
    // 1) add to queue
    // 2) carry on our path array to each move
    availableMoves.forEach((node) => {
      queue.push(node);
      currentNode.path.forEach((nodePath) => {
        node.path.push(nodePath);
      });
    });
  }
};

console.log(knightMoves([4, 3], [7, 4]));
