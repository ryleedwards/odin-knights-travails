const board = [];
const rows = 8;
const cols = 8;

// Populate board
for (let i = 0; i < rows; i++) {
  board[i] = [];
  for (let j = 0; j < cols; j++) {
    board[i][j] = 'o';
  }
}

// let r = 1;
// let c = 6;
// console.log(`Moves for [${r},${c}] :`);
// generateMoves(board, r, c).forEach((result) => {
//   console.log(result);
// });

const bfsExplore = (board, src, dst) => {
  const visited = new Set(src);
  let x, y;
  x = src[0];
  y = src[1];
  visited.add(`${x},${y}`);
  console.log(visited.has([3, 4]));
};

bfsExplore(board, [4, 3], [6, 7]);

// Is position in-bounds?
function isPositionOnBoard(r, c) {
  if (r < 0 || r > rows - 1 || c < 0 || c > cols - 1) return false;
  else return true;
}

// Given a knight placement on board, what are its available moves?
// Return as an array of edges
function generateMoves(board, r, c) {
  const moves = [];
  if (isPositionOnBoard(r + 1, c + 2)) moves.push([r + 1, c + 2]);
  if (isPositionOnBoard(r - 1, c + 2)) moves.push([r - 1, c + 2]);
  if (isPositionOnBoard(r + 1, c - 2)) moves.push([r + 1, c - 2]);
  if (isPositionOnBoard(r - 1, c - 2)) moves.push([r - 1, c - 2]);
  if (isPositionOnBoard(r + 2, c + 1)) moves.push([r + 2, c + 1]);
  if (isPositionOnBoard(r - 2, c + 1)) moves.push([r - 2, c + 1]);
  if (isPositionOnBoard(r + 2, c - 1)) moves.push([r + 2, c - 1]);
  if (isPositionOnBoard(r - 2, c - 1)) moves.push([r - 2, c - 1]);
  return moves;
}

function posToStr(posInt) {
  // position passed as array of integers: [3, 4]
  // destructure and store as string
  let r, c;
  [r, c] = posInt;
  return `${r},${c}`;
}

function posToInt(posStr) {
  let r, c;
  r = parseInt(posStr.slice(0, 1));
  c = parseInt(posStr.slice(2));
  return [r, c];
}

let newPos = [3, 4];
let newPosString = posToStr(newPos);
console.log(newPosString);
let newPosBackToInt = posToInt(newPosString);
console.log(newPosBackToInt);
