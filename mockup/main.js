// Data
var state = {
  userIs: "blue",
  computerIs: "green",
  userTurn: false
};

state.initialBoard =
  [
    [ null,null,null ],
    [ null,null,null ],
    [ null,null,null ]
  ];

// jQuery Selectors
var gameButtons = $(".ttt-row > button");

// Functions
function resetBoard() {
  gameButtons.attr("disabled", false).removeClass("blue").removeClass("green");

  state.board = [];

  state.initialBoard.forEach(function (elem, idx) {
    state.board[idx] = elem.slice();
  });

  if (!state.userTurn) { computerMove(); }
}

function rand0_2() {
  var num = Math.random(),
      result;

  if (num > 0.66666) {
    result = 2;
  } else if (num > 0.33333) {
    result = 1;
  } else {
    result = 0;
  }

  return result;
}

function computerMove() {
  var row = rand0_2(),
      col = rand0_2(),
      id = "#" + row + col,
      gameOver;


  if (!state.board[row][col]) {
    state.board[row][col] = state.computerIs;

    $(id).addClass(state.computerIs);
  } else {
    computerMove();
  }

  gameOver = isGameOver();

  if (gameOver) {
    // End game
  } else {
    state.userTurn = true;
  }
}

function handleUserSelection(event) {
  if (!state.userTurn) { return; }
  var id = event.target.id,
      row = +id[0],
      col = +id[1];

  if (state.board[row][col]) { return; }

  state.board[row][col] = state.userIs;

  id = "#" + id;

  $(id).addClass(state.userIs);

  userTurn = false;

  gameOver = isGameOver();

  if (gameOver) {
    // End game
  } else {
    state.userTurn = false;
    computerMove();
  }

}

// Return false or winner or something for tie
function isGameOver() {
  return false;
}

// Setup game
resetBoard();
$(gameButtons).click(handleUserSelection);
