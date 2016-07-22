/* jshint esversion: 6 */

function isGameOver(state, boardArr) {

  const board = state.board;
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
