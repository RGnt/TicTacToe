const ticTacToe = require('./ticTacToe');

test('Empty board should be of length 3 and sub arrays should be of same length', () => {
    let boardSize = ticTacToe.board.length;
    expect(ticTacToe.board.length).toBe(3);
    expect(ticTacToe.board[0].length).toBe(3);
    expect(ticTacToe.board[1].length).toBe(3);
    expect(ticTacToe.board[2].length).toBe(3);
});

test('Emtpy board should contain 3x3 cells with 0s', () =>{
    let gameBoard = ticTacToe.board;
    expect(gameBoard[0][0]).toBe(0);
    expect(gameBoard[0][1]).toBe(0);
    expect(gameBoard[0][2]).toBe(0);
    expect(gameBoard[1][0]).toBe(0);
    expect(gameBoard[1][1]).toBe(0);
    expect(gameBoard[1][2]).toBe(0);
    expect(gameBoard[2][0]).toBe(0);
    expect(gameBoard[2][1]).toBe(0);
    expect(gameBoard[2][2]).toBe(0);
});

test('Taking a turn should change player', () => {
    let curTurn = ticTacToe.isXTurn;
    expect(curTurn).toBe(1);
    newTurn = ticTacToe.swapPlayer(curTurn);
    expect(newTurn).toBe(-1);
});

test('Placing a mark in to 1-2 (1st row 2nd column) should return board with 1 in [1]', () => {
    let initialBoard = ticTacToe.board;
    let initialPlayer = ticTacToe.isXTurn;
    let currentBoard = ticTacToe.placeMark(0, 1, initialBoard, initialPlayer);
    expect(currentBoard[0][1]).toBe(1);
});

test('Checking for win function returns correct player', () => {
    let winner = ticTacToe.checkWinner(1, 1, 1);
    expect(winner).toBe(true);
    winner = ticTacToe.checkWinner(-1, -1, -1);
    expect(winner).toBe(true);
    winner = ticTacToe.checkWinner(0,1,-1);
    expect(winner).toBe(false);
});

test('Checking isWinnerFound works', ()=> {
    const gameTest = require("./ticTacToe");
    let winner = "-";
    expect(winner).toBe("-");
    currentPlayer = gameTest.isXTurn;
    gameTest.board = gameTest.placeMark(0, 0, gameTest.board, currentPlayer);
    gameTest.board = gameTest.placeMark(0, 1, gameTest.board, currentPlayer);
    gameTest.board = gameTest.placeMark(0, 2, gameTest.board, currentPlayer);
    console.log(currentPlayer);
    let arr = JSON.parse(JSON.stringify(gameTest.board));
    winner = gameTest.isWinnerFound(arr, currentPlayer);
    expect(winner).toBe("X");
    currentPlayer = gameTest.swapPlayer(currentPlayer);
    winner = gameTest.isWinnerFound(arr, currentPlayer);
    expect(winner).toBe("O");
});