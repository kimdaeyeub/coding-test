const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// 모든 경우의 수를 나열
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
//해당 인덱스의 값이 결과값에 들어갔는지 체크하기 위해
let visited = new Array(m).fill(false);
// 결과값으로 사용하기 위한 값이 들어가는 배열
let selected = [];

let answer = "";

function solution(arr, depth) {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    solution(arr, depth + 1); //위의 if문에서 return 을 하면 해당 재귀함수의 반복이 종료
    selected.pop(); //다음의 i 값을 위해 배열을 비우는작업
    visited[i] = false; //다음의 i 값을 위해 visited배열의 값들을 다시 false로 되돌리는 작업
  }
}

solution(arr, 0);
console.log(answer);
