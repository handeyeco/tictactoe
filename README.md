#Tic Tac Toe

I created this new game, that I like to call __Tic Tac Toe__.

(It's a FCC project)

##Development

###Day 2

Refactored `makeBoardArr` out of `isGameOver` and wrote tests for it. Going to pass `boardArr` to the new function `computerMove`.

Started writing tests for `computerMove` which is a function that calls smaller functions to make first move, block, and strategize.

###Day 1

In an effort to do this project in the BDD style, I started off with Mocha/Chai tests; specifically for the first function `isGameOver`.

`isGameOver` checks the state of the board to determine if the game is finished; returning falsey if the game should continue and truthey if the game should stop.

First it checks if the board is full; if so `result` is `3`. Then it creates a 2D array of rows (horizontal, vertical, and diagonal) and checks each one for a win; overwriting `result` with either a `1` or a `2` depending on who won.

>__isGameOver(state)__
>returns:
>  * 0 to continue
>  * 1 for X win
>  * 2 for O win
>  * 3 for a tie
