const board = [];
const rows = 8;
const cols = 8;

for (let i = 0; i < rows; i++) {
  board[i] = [];
  for (let j = 0; j < cols; j++) {
    board[i][j] = 'o';
  }
}

// Given a knight placement on board, what are its available moves?
// Return as an array of edges
const generateMoves = (board, r, c) => {
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
};

const isPositionOnBoard = (r, c) => {
  if (r < 0 || r > rows - 1 || c < 0 || c > cols - 1) return false;
  else return true;
};

let r = 1;
let c = 6;
console.log(`Moves for [${r},${c}] :`);
generateMoves(board, r, c).forEach((result) => {
  console.log(result);
});
