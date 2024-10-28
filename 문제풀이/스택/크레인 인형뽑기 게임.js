function solution(board, moves) {
  let answer = 0;
  let stacks = [];
  let basket = [];

  for (let i of board) {
    stacks.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== 0) stacks[j].push(board[i][j]);
    }
  }

  for (let x of moves) {
    if (stacks[x - 1].length === 0) continue;
    const a = stacks[x - 1].shift();
    if (basket[basket.length - 1] === a) {
      basket.pop();
      answer++;
    } else {
      basket.push(a);
    }
  }

  return answer * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
); //4
