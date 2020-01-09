// sample board pulled from https://www.geeksforgeeks.org/sudoku-backtracking-7/
let board = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
];

// returns [row, col] where board[row][col] is empty if an empty spot exists
// returns -1 if board is complete
function findEmptyLocation() {
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            if(board[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return -1; // means that the board is complete
}

// true if num is used in row
// false otherwise
function usedInRow(row, num) {
    for(let col = 0; col < 9; col++) {
        if(board[row][col] === num) return true;
    }
    return false;
}

// true if num is used in colimn
// false otherwise
function usedInCol(col, num) {
    for(let row = 0; row < 9; row++) {
        if(board[row][col] === num) return true;
    }
    return false;
}

// true if num is used in the box containing the square specified by row, col
// false otherwise
function usedInBox(row, col, num) {
    // get the top left corner of the box
    const boxRow = row - row%3;
    const boxCol = col - col%3;

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(board[boxRow + i][boxCol + j] === num) return true;
        }
    }
    return false;
}

// true if it's okay to place num at the spot row, col
// false otherwise
function isLocationSafe(row, col, num) {
    return (
        !usedInRow(row, num) &&
        !usedInCol(col, num) &&
        !usedInBox(row, col, num)
    );
}

function solveSudoku() {

    // it's been solved already
    if(findEmptyLocation() === -1) return true;

    let [row, col] = findEmptyLocation();

    for(let num = 1; num <= 9; num++) {
        if(isLocationSafe(row, col, num)) {
            // make tentative assignment
            board[row][col] = num;

            // if it succeeds, yay!
            if(solveSudoku()) return true;

            // failure, undo and try again
            board[row][col] = 0;
        }
    }

    // triggers backtracking
    return false;

}

console.table(board);
solveSudoku();
console.table(board);
