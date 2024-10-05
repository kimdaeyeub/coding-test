const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const data = input[1].split(" ").map(Number);
let [add, sub, mul, div] = input[2].split(" ").map(Number);

let minValue = 1e9;
let maxValue = -1e9;
function dfs(index, value) {
  if (index === n) {
    minValue = Math.min(value, minValue);
    maxValue = Math.max(value, maxValue);
    return;
  }
  if (add > 0) {
    add--;
    dfs(index + 1, value + data[index]);
    add++;
  }
  if (sub > 0) {
    sub--;
    dfs(index + 1, value - data[index]);
    sub++;
  }
  if (mul > 0) {
    mul--;
    dfs(index + 1, value * data[index]);
    mul++;
  }
  if (div > 0) {
    div--;
    dfs(index + 1, ~~(value / data[index]));
    div++;
  }
}

dfs(1, data[0]);

console.log(maxValue);
console.log(minValue);
