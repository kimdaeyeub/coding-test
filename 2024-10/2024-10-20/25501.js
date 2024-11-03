const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

function recursion(s, l, r, count) {
  if (l >= r) {
    return [1, count];
  } else if (s[l] !== s[r]) {
    return [0, count];
  } else {
    return recursion(s, l + 1, r - 1, count + 1);
  }
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1, 1);
}

for (let i = 1; i < input.length; i++) {
  const value = isPalindrome(input[i]);
  console.log(value.join(" "));
}
