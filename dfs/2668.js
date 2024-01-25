// 입력
// 첫째 줄에는 N(1≤N≤100)을 나타내는 정수 하나가 주어진다. 그 다음 줄부터는 표의 둘째 줄에 들어가는 정수들이 순서대로 한 줄에 하나씩 입력된다.

// 출력
// 첫째 줄에 뽑힌 정수들의 개수를 출력하고, 그 다음 줄부터는 뽑힌 정수들을 작은 수부터 큰 수의 순서로 한 줄에 하나씩 출력한다.

// 7
// 3
// 1
// 1
// 5
// 5
// 4
// 6

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

let result = [];
function dfs(x, visited, finished, result, graph) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, visited, finished, result, graph);
  } else if (!finished[y]) {
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}

let graph = [0];
let visited = new Array(testCase + 1).fill(false);
let finished = new Array(testCase + 1).fill(false);

for (let i = 1; i < input.length; i++) {
  const y = Number(input[i]);
  graph.push(y);
}

for (let i = 1; i < input.length; i++) {
  if (!visited[i]) dfs(i, visited, finished, result, graph);
}
result = result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join("\n"));
