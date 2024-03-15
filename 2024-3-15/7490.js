const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

let selected = [];
let answer = "";
function solution(n, depth, arr) {
  if (depth === n - 1) {
    let temp = [];
    let cal = "";
    for (let i = 0; i < selected.length; i++) temp[2 * i + 1] = selected[i];
    for (let i = 0; i < arr.length; i++) temp[2 * i] = arr[i];
    const result = eval(temp.join("").replace(/ /g, ""));
    if (result === 0) {
      answer += temp.join("") + "\n";
    }
    return;
  }
  for (let x of [" ", "+", "-"]) {
    selected.push(x);
    solution(n, depth + 1, arr);
    selected.pop();
  }
}

for (let i = 1; i <= testCase; i++) {
  const n = Number(input[i]);
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  solution(n, 0, arr);
  console.log(answer);
  answer = "";
}
