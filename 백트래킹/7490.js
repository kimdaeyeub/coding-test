const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input[0]);
let n = 0;

let arr = [];

for (let i = 1; i <= testCase; i++) {
  n = Number(input[i]);
  arr = []; //다음 케이스 계산을 위해 초기화
  for (let j = 1; j <= n; j++) {
    arr.push(j);
  }
  dfs([], 0);
  console.log("");
}

function dfs(array, depth) {
  if (depth === n - 1) {
    let line = "";
    for (let i = 0; i < n - 1; i += 1) {
      line += arr[i] + array[i];
    }
    line += `${arr[n - 1]}`;
    answer = eval(line.split(" ").join("")); //공백 제거 후 수식 계산
    if (answer === 0) console.log(line);
    return;
  }
  for (let j of [" ", "+", "-"]) {
    array.push(j);
    dfs(array, depth + 1);
    array.pop();
  }
}
