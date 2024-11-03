const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let results = [];
let q = [];
for (let i = 1; i <= N; i++) {
  const [command, value] = input[i].split(" ");
  switch (command) {
    case "push":
      q.push(value);
      break;
    case "pop":
      if (q.length === 0) {
        results.push(-1);
      } else {
        results.push(q.shift());
      }
      break;
    case "size":
      results.push(q.length);
      break;

    case "empty":
      if (q.length === 0) {
        results.push(1);
      } else {
        results.push(0);
      }
      break;
    case "front":
      if (q.length === 0) {
        results.push(-1);
      } else {
        results.push(q[0]);
      }
      break;
    case "back":
      if (q.length === 0) {
        results.push(-1);
      } else {
        results.push(q[q.length - 1]);
      }
      break;
  }
}

console.log(results.join("\n"));
