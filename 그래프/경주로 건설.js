function solution(board) {
  let visited = [];
  for (let i = 0; i < board.length; i++) {
    visited.push([]);
    for (let j = 0; j < board.length; j++) {
      visited[i].push(false);
    }
  }
  const q = [];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const d = [1, -1];
  q.push([0, 0, [[0, 0]], "", 1]);
  const results = [];
  let cost = Infinity;
  while (q.length) {
    let pass = false;
    const [x, y, list, prevDirection] = q.shift();
    console.log(x, y, list, prevDirection);
    if (x === board.length - 1 && y === board.length - 1) {
      let tempCost = (list.length - 1) * 100;
      for (let i = 2; i < list.length; i++) {
        const [x1, y1] = list[i];
        const [x2, y2] = list[i - 2];
        if (Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 1) tempCost += 500;
      }
      cost = Math.min(cost, tempCost);
    }
    if (prevDirection === "X" || prevDirection === "Y") {
      if (prevDirection === "X") {
        for (let i of d) {
          const nx = x + i;
          if (
            nx >= 0 &&
            nx < board.length &&
            board[y][nx] === 0 &&
            !visited[y][nx]
          ) {
            q.push([nx, y, [...list, [nx, y]], "X"]);
            visited[y][nx] = true;
            pass = true;
          }
        }
      } else {
        for (let i of d) {
          const ny = y + i;
          if (
            ny >= 0 &&
            ny < board.length &&
            board[ny][x] === 0 &&
            !visited[ny][x]
          ) {
            q.push([x, ny, [...list, [x, ny]], "Y"]);
            visited[ny][x] = true;
            pass = true;
          }
        }
      }
    }

    if (prevDirection === "" || !pass) {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < board.length &&
          ny < board.length &&
          board[ny][nx] === 0 &&
          !visited[ny][nx]
        ) {
          q.push([
            nx,
            ny,
            [...list, [nx, ny]],
            nx === x ? "Y" : "X",
            nx === x ? dy[i] : dx[i],
          ]);
          visited[ny][nx] = true;
        }
      }
    }
  }
  return cost;
}

// console.log(
//   solution([
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ])
// ); //900
// console.log(
//   solution([
//     [0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 1],
//     [0, 0, 1, 0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0],
//   ])
// ); //3800
console.log(
  solution([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ])
); //2100
// console.log(
//   solution([
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 0],
//     [0, 0, 1, 0, 0, 0],
//     [1, 0, 0, 1, 0, 1],
//     [0, 1, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0],
//   ])
// ); //3200
