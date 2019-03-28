let board = [ [0, 0, 0], [0, 0, 0], [0, 0, 0]];
let isXTurn = 1;

function swapPlayer(curPlayer) {
    nextPlayer = -curPlayer;
    return nextPlayer;
}

function placeMark(row, col, board, player) {
    console.log(board);
    let gameBoard = JSON.parse(JSON.stringify(board));
    gameBoard[row][col] = player;
    return gameBoard;
}

module.exports = {
    board: board,
    isXTurn: isXTurn,
    swapPlayer: swapPlayer,
    placeMark: placeMark
};