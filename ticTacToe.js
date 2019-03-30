const initialBoard = [ [0, 0, 0], [0, 0, 0], [0, 0, 0]];
let isXTurn = 1;
const playerXWinValue = 3;
const playerOWinValue = -3;

function swapPlayer(curPlayer) {
    nextPlayer = -curPlayer;
    return nextPlayer;
}

function placeMark(row, col, board, player) {
    let gameBoard = JSON.parse(JSON.stringify(board));
    gameBoard[row][col] = player;
    return gameBoard;
}

function checkWinner(loc1, loc2, loc3) {
    if(loc1 == loc2 && loc2 == loc3 && loc1 != 0) {
        return true;
    } 
    return false;
}

function isWinnerFound(gameBoard, currentPlayer) {
    if(checkWinner(gameBoard[0][0], gameBoard[0][1], gameBoard[0][2]) || 
       checkWinner(gameBoard[1][0], gameBoard[1][1], gameBoard[1][2]) ||
       checkWinner(gameBoard[2][0], gameBoard[2][1], gameBoard[2][2]) ||
       checkWinner(gameBoard[0][0], gameBoard[1][0], gameBoard[2][0]) ||
       checkWinner(gameBoard[0][1], gameBoard[1][1], gameBoard[2][1]) ||
       checkWinner(gameBoard[0][2], gameBoard[1][2], gameBoard[2][2]) ||
       checkWinner(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]) ||
       checkWinner(gameBoard[2][0], gameBoard[1][1], gameBoard[0][2])) {
            if(currentPlayer == 1) {
                return "X";
            } else {
                return "O";
            }
       }
    return "-";
}

function isMoveLegal(row, col, board) {
    if(board[row][col] != 0) {
        return false;
    }
    return true;
}

module.exports = {
    board: initialBoard,
    isXTurn: isXTurn,
    swapPlayer: swapPlayer,
    placeMark: placeMark,
    checkWinner: checkWinner,
    isWinnerFound: isWinnerFound,
    isMoveLegal: isMoveLegal
};