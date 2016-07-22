/* jshint esversion: 6 */

function makeBoardArr(state) {
  const board = state.board;
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

  return boardArr;
}

module.exports = makeBoardArr;
