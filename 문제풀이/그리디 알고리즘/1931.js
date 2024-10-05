const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input.splice(0, 1));

let arr = input.map((item) => item.split(" ").map(Number));
arr = arr.sort((a, b) => {
  if (a[1] > b[1]) {
    return 1;
  } else if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return -1;
  }
});
console.log(arr);

let count = 1;
let last = arr[0];

for (let i = 1; i < testCase; i++) {
  //   console.log(arr[i]);
  if (last[1] <= arr[i][0]) {
    count += 1;
    last = arr[i];
  }
}
console.log(count);
