/* jshint esversion: 6 */

function computerMove(state) {
  const board = state.board;
  const computerIs = state.computerIs;
  const moveCount = state.moveCount;

  let boardResult = board;

  // Handle computer's first move
  if (moveCount < 2) {
    return computerFirstMove(board, computerIs, moveCount);
  }

}

function computerCanWin () {

}

function computerShouldBlock () {

}

function computerShouldStartLine () {
  
}

/////////////////////
/////////////////////
//computerFirstMove is hard coded
//resulting in only three possible
//first moves
/////////////////////
/////////////////////
function computerFirstMove(board, computerIs, moveCount) {

  let boardResult = board;

  // First move if computer is X
  if (computerIs === 1) {
    // Take corner
    return {board: [
        [1,0,0],
        [0,0,0],
        [0,0,0]
    ]};
  }

  // First move if computer is  O
  else {
    // Check if center is open
    if (board[1][1] === 0) {
      boardResult[1][1] = 2;

      return {board: boardResult};
    }
    // Otherwise take corner
    else {
      boardResult[0][0] = 2;

      return {board: boardResult};
    }
  }

}

module.exports = computerMove;
