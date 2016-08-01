/* jshint esversion: 6 */

function makeBoardObj(state) {
  const board = state.board;
  const coord = [
    [[0, 0],[0, 1],[0, 2]], // Horizontal 1
    [[1, 0],[1, 1],[1, 2]], // Horizontal 2
    [[2, 0],[2, 1],[2, 2]], // Horizontal 3
    [[0, 0],[1, 0],[2, 0]], // Vertical 1
    [[0, 1],[1, 1],[2, 1]], // Vertical 2
    [[0, 2],[1, 2],[2, 2]], // Vertical 3
    [[0, 0],[1, 1],[2, 2]], // Diagonal 1
    [[0, 2],[1, 1],[2, 0]]  // Diagonal 2
  ];
  //boardArr starts with the three
  //horizontal rows
  //with copy of board array
  let boardArr = board.slice();

  //Iterate over board to add
  //vertical rows to boardArr
  board[0].forEach((elem, idx) => {
    boardArr.push([
      board[0][idx],
      board[1][idx],
      board[2][idx]
    ]);
  });

  //Grab the two diagonals
  boardArr.push([
    board[0][0],
    board[1][1],
    board[2][2]
  ], [
    board[0][2],
    board[1][1],
    board[2][0]
  ]);

  return { boardArr, coord };
}

module.exports = makeBoardArr;
