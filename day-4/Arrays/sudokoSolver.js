var isValidSudoku = function (board) {
  // 96.69%
  let row = new Set();
  let col = new Set();
  let box = new Set();

  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      let val = board[i][j];
      if (val === ".") continue;
      let rowKey = i + "r" + val;
      let colKey = j + "r" + val;
      let boxKey = Math.floor(i / 3) + "b" + Math.floor(j / 3) + "b" + val;

      if (row.has(rowKey) || col.has(colKey) || box.has(boxKey)) return false;

      row.add(rowKey);
      col.add(colKey);
      box.add(boxKey);
    }
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));

/*
1. create a pattern for row like 0rval
2. create a patern for col like 0cval
3. create a pattern for 3*3 box like 0b0bval
4. check if any of the pattern lies in set then return false;
*/
