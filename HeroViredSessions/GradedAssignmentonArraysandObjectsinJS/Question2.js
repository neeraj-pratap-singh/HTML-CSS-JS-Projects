// Question 2:- Valid Sudoku
// Description:
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
//  Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// Output: true
function isValidSudoku(board) {
    // Check rows
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (row.has(board[i][j])) {
                    return false;
                }
                row.add(board[i][j]);
            }
        }
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
        let col = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== '.') {
                if (col.has(board[j][i])) {
                    return false;
                }
                col.add(board[j][i]);
            }
        }
    }

    // Check 3x3 boxes
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let box = new Set();
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    const val = board[i + x][j + y];
                    if (val !== '.') {
                        if (box.has(val)) {
                            return false;
                        }
                        box.add(val);
                    }
                }
            }
        }
    }

    return true;
}

// Test the function
const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board) ? "true" : "false");  // Output should be true
