// 10 1 10 2 1
// F(건물 층), S(현재 위치), G(사무실 위치), U, D
// 스타트링크는 총 F층으로 이루어진 고층 건물에 사무실이 있고, 스타트링크가 있는 곳의 위치는 G층이다. 강호가 지금 있는 곳은 S층이고, 이제 엘리베이터를 타고 G층으로 이동하려고 한다.

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [F, S, G, U, D] = input[0].split(" ").map(Number);

let visited = new Array(F).fill(false);

function bfs(curr) {
  let q = [[curr, 0]];
  visited[curr - 1] = true;

  while (q.length > 0) {
    const [a, b] = q.shift();
    if (a === G) return b;

    for (let x of [U, -D]) {
      if (a + x < 1 || a + x > F || visited[a + x - 1]) continue;
      q.push([a + x, b + 1]);
      visited[a + x - 1] = true;
    }
  }

  return "use the stairs";
}

const result = bfs(S);
console.log(result);
