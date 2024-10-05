// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스의 첫 줄에는 학생의 수가 정수 n (2 ≤ n ≤ 100,000)으로 주어진다. 각 테스트 케이스의 둘째 줄에는 선택된 학생들의 번호가 주어진다. (모든 학생들은 1부터 n까지 번호가 부여된다.)

// 출력
// 각 테스트 케이스마다 한 줄에 출력하고, 각 줄에는 프로젝트 팀에 속하지 못한 학생들의 수를 나타내면 된다.
// 2
// 7
// 3 1 3 7 3 4 6
// 8
// 1 2 3 4 5 6 7 8

//(4,7), (6,4), (7,6)

// 루프를 찾아야 함.
function dfs(i, visited, finished, result, graph) {
  visited[i] = true;
  let y = graph[i];
  if (!visited[y]) {
    // y값을 방문한적이 없으면 재귀함수를 통해서 루트를 이어나가야함.
    dfs(y, visited, finished, result, graph);
  } else if (!finished[y]) {
    // 방문은 하였지만 사용되지 않은 값으로 표시된다면 그 값은 루프임.
    while (y != i) {
      result.push(y);
      y = graph[y];
    }
    result.push(i);
  }
  finished[i] = true;
}

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let testCase = Number(input[0]);
let line = 1;

while (testCase--) {
  const n = Number(input[line]);

  const data = input[line + 1].split(" ").map(Number);

  const graph = [0, ...data];

  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];

  for (let i = 1; i < graph.length; i++) {
    if (!visited[i]) dfs(i, visited, finished, result, graph);
  }
  console.log(n - result.length);
  line += 2;
}
