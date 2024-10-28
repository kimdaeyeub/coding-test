function solution(maps) {
  let visited = [];
  for (let i = 0; i < maps.length; i++) {
    visited.push([]);
    for (let j = 0; j < maps[0].length; j++) {
      visited[i].push(false);
    }
  }
  const queue = [];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  queue.push([1, 1, 0]);
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, count] = queue.shift();
    if (x === maps[0].length && y === maps.length) {
      // 도착
      return count + 1;
    }
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx <= maps[0].length &&
        ny <= maps.length &&
        nx >= 1 &&
        ny >= 1 &&
        maps[ny - 1][nx - 1] === 1
      ) {
        if (visited[ny - 1][nx - 1]) continue;
        visited[ny - 1][nx - 1] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
  return -1;
}

// 최솟값을 return
//  0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
// 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]),
); //11
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ]),
);
//-1
