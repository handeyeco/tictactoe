/* jshint esversion: 6 */

function isGameOver (state) {

  const board = state.board;
  //boardArr starts with the three
  //horizontal rows
  let boardArr = board;
  //Will return (falsey = continue, truthey = game over)
  //0 = game should continue
  //1 = game over [1] wins
  //2 = game over [2] wins
  //3 = game over, tie game
  let result = 0;
  let flatBoard = [];

  //Check for tied game
  board.forEach(elem => {
    flatBoard = flatBoard.concat(elem);
  });

  //If all squares are filled signal tied game
  //  (to be overwritten if last square was winning move)
  if (flatBoard.filter(Boolean).length === 9) {
    result = 3;
  }

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
  board.push([
    board[0][0],
    board[1][1],
    board[2][2]
  ], [
    board[0][2],
    board[1][1],
    board[2][0]
  ]);

  //Check each row to see if it's a win
  boardArr.forEach(elem => {
    if (
      //Every element in row is occupied
      elem[0] && elem[1] && elem[2] &&
      //All elements equal each other
      elem[0] === elem[1] &&
      elem[1] === elem[2]
    ) {
      result = elem[0];
    }
  });

  return result;
}

module.exports = isGameOver;
