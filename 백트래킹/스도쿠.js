function solution(board) {
  function isValid(num, row, col) {
    return !(isRows(row, num) || isCol(col, num) || isBox(row, col, num));
  }

  function isRows(row, num) {
    return board[row].includes(num);
  }

  function isCol(col, num) {
    return board.some((row) => row[col] === num);
  }

  function isBox(row, col, num) {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) return true;
      }
    }
    return false;
  }

  function findEmptyPosition() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) return [i, j];
      }
    }
    return null;
  }

  function track() {
    const emptyPosition = findEmptyPosition();
    if (!emptyPosition) {
      return true;
    }
    const [row, col] = emptyPosition;
    for (let i = 1; i <= 9; i++) {
      if (isValid(i, row, col)) {
        board[row][col] = i;
        if (track()) {
          return true;
        }
        board[row][col] = 0;
      }
    }
    return false;
  }

  track();
  return board;
}

console.log(
  solution([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ]),
);

// [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ]

// console.log(
//   solution([
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ])
// );

// [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [2, 3, 4, 5, 6, 7, 8, 9, 1],
//   [5, 6, 7, 8, 9, 1, 2, 3, 4],
//   [8, 9, 1, 2, 3, 4, 5, 6, 7],
//   [3, 4, 5, 6, 7, 8, 9, 1, 2],
//   [6, 7, 8, 9, 1, 2, 3, 4, 5],
//   [9, 1, 2, 3, 4, 5, 6, 7, 8],
// ]
