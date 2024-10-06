function BFS(x, y, endX, endY, maps, visited) {
  let queue = [];
  queue.push([x, y, 0]);
  let d = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  visited[y][x] = true;
  while (queue.length) {
    const queueFirst = queue.shift();

    if (queueFirst[0] === endX && queueFirst[1] === endY) {
      return queueFirst[2];
    }

    for (let [dx, dy] of d) {
      let newX = queueFirst[0] + dx;
      let newY = queueFirst[1] + dy;

      if (
        newX >= 0 &&
        newX < maps[0].length &&
        newY >= 0 &&
        newY < maps.length &&
        maps[newY][newX] !== "X" &&
        !visited[newY][newX]
      ) {
        queue.push([newX, newY, queueFirst[2] + 1]);
        visited[newY][newX] = true;
      }
    }
  }
  return -1;
}

function generateVisited(height, width) {
  let visited = [];
  for (let i = 0; i < height; i++) {
    visited.push(new Array(width).fill(false));
  }
  return visited;
}

function solution(maps) {
  let x = 0,
    y = 0;
  let endX = 0,
    endY = 0;
  let middelX = 0,
    middelY = 0;

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") {
        y = i;
        x = j;
      }
      if (maps[i][j] === "E") {
        endY = i;
        endX = j;
      }
      if (maps[i][j] === "L") {
        middelY = i;
        middelX = j;
      }
    }
  }

  let visited = generateVisited(maps.length, maps[0].length);
  let zeroToMiddle = BFS(x, y, middelX, middelY, maps, visited);

  if (zeroToMiddle === -1) return -1;

  visited = generateVisited(maps.length, maps[0].length);
  let middleToEnd = BFS(middelX, middelY, endX, endY, maps, visited);

  if (middleToEnd === -1) return -1;

  return zeroToMiddle + middleToEnd;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"])); //16
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"])); //-1
