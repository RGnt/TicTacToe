let board = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
let isXTurn = 1;

function takeTurn(loc) {
    nextPlayer = -isXTurn;
    return nextPlayer;
}

function printTurn() {
    console.log(isXTurn);
}

function placeMark(loc, board) {
    let gameBoard = [];
    gameBoard.concat(board);
    gameBoard[loc] = isXTurn;
    return gameBoard;
}

module.exports = {
    board: board,
    isXTurn: isXTurn,
    takeTurn: takeTurn,
    placeMark: placeMark
};