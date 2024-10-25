// N:1 =>1
// N:2 => 2
// N:3 =>  001  100  111 =>3
// N:4 => 5

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const N = Number(input);

let arr = new Array(N + 1).fill(0);

arr[1] = 1;
arr[2] = 2;

for (let i = 3; i <= N; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
}

console.log(arr[N]);
