import React from 'react';
import ReactDOM from 'react-dom';

const TicTacToe = React.createClass({
  getInitialState: function () {
    return {
      board: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
      message: "World"
    }
  },

  render: function () {
    return (
      <div>
        <h1>Hello</h1>
        <p>{this.state.message}</p>
      </div>
    )
  }
});

ReactDOM.render(<TicTacToe/>, document.getElementById("tictactoe"));
