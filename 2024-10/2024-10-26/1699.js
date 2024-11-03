// N:1 => 1 dp[1]=1
// N:2 => 2 dp[2]=2
// N:3 => 3 dp[3] = 3
// N:4 => 1 dp[4]=(4,1)=1
// N:5 => 2 dp[5]=(2, 2)=2
// N:6 => 3 dp[6] = (3,4)=3
// N:7 => 4 dp[7] = (4,4)=4
// N:8 => 2
// N:9 => 1
// N:10 => 2
// N:11 => 3
// N:12 => 4
// N:13 => 2
// N:14 => 3
// N:15 => 4
// N:16 => 1

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let N = Number(input);

let dp = new Array(N + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[N]);
