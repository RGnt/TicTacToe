const ticTacToe = require('./ticTacToe');

test('Empty board should be of length 9', () => {
    let boardSize = ticTacToe.board.length;
    expect(boardSize).toBe(9);
});

test('Emtpy board should contain 9 0cells', () =>{
    let gameBoard = ticTacToe.board;
    expect(gameBoard[1]).toBe(0);
    expect(gameBoard[0]).toBe(0);
    expect(gameBoard[2]).toBe(0);
    expect(gameBoard[3]).toBe(0);
    expect(gameBoard[4]).toBe(0);
    expect(gameBoard[5]).toBe(0);
    expect(gameBoard[6]).toBe(0);
    expect(gameBoard[7]).toBe(0);
    expect(gameBoard[8]).toBe(0);
});

test('Taking a turn should change player', () => {
    let curTurn = ticTacToe.isXTurn;
    expect(curTurn).toBe(1);
    curTurn = ticTacToe.swapPlayer(0);
    expect(curTurn).toBe(-1);
});

test('Placing a mark in to 1-2 (1st row 2nd column) should return board with 1 in [1]', () => {
    let initialBoard = ticTacToe.board;
    let currentBoard = ticTacToe.placeMark(1, initialBoard);
    expect(currentBoard[1]).toBe(1);
});