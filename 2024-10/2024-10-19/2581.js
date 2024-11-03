// 입력
// 입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.

// M과 N은 10,000이하의 자연수이며, M은 N보다 작거나 같다.

// 출력
// M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다.

// 단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);
let arr = [];

for (let i = M; i <= N; i++) {
  if (i === 1) continue;
  let validation = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      validation = false;
      break;
    }
  }
  if (validation) {
    arr.push(i);
  }
}

if (arr.length === 0) {
  console.log(-1);
} else {
  console.log(arr.reduce((a, b) => a + b));
  console.log(arr[0]);
}
