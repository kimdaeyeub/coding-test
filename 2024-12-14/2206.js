// 입력 처리
const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();
const lines = input.split("\n");
const [N, M] = lines[0].split(" ").map(Number);
const grid = lines.slice(1).map((line) => line.split("").map(Number));
// 최단 경로를 구하는 함수
function shortestPathWithWallBreaking(grid) {
  const n = grid.length; // 맵의 행 개수
  const m = grid[0].length; // 맵의 열 개수

  // 방향 배열 (상, 하, 좌, 우): 상하좌우로 이동하기 위한 좌표 변화
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // 방문 상태를 저장하기 위한 3차원 배열 [x][y][z]:
  // z는 벽을 부쉈는지 여부를 나타냄 (0이면 벽을 부수지 않음, 1이면 부숨)
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(2).fill(false))
  );

  // 큐를 배열이 아닌 deque로 구현
  const queue = [[0, 0, 0, 1]]; // 시작점 (0, 0), 벽을 부수지 않음(0), 거리 1부터 시작
  visited[0][0][0] = true; // 시작 위치 방문 처리

  let head = 0; // 큐의 시작 인덱스

  while (head < queue.length) {
    const [x, y, wallBroken, distance] = queue[head++]; // 큐의 현재 위치를 가져옴

    // (N, M)에 도착하면 최단 거리 반환
    if (x === n - 1 && y === m - 1) return distance;

    // 4방향 탐색
    for (const [dx, dy] of directions) {
      const nx = x + dx; // 다음 x좌표
      const ny = y + dy; // 다음 y좌표

      // 맵 경계를 벗어나지 않도록 확인
      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        // 벽이 없는 경우 이동
        if (grid[nx][ny] === 0 && !visited[nx][ny][wallBroken]) {
          visited[nx][ny][wallBroken] = true; // 방문 처리
          queue.push([nx, ny, wallBroken, distance + 1]); // 다음 위치를 큐에 추가
        }

        // 벽이 있고 아직 벽을 부수지 않은 경우
        if (grid[nx][ny] === 1 && wallBroken === 0 && !visited[nx][ny][1]) {
          visited[nx][ny][1] = true; // 벽을 부쉈으므로 방문 처리
          queue.push([nx, ny, 1, distance + 1]); // 벽을 부순 상태로 다음 위치 추가
        }
      }
    }
  }

  // (N, M)에 도달할 수 없는 경우 -1 반환
  return -1;
}

// 결과 출력
console.log(shortestPathWithWallBreaking(grid));
