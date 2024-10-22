const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const uppercase = /[A-Z]/;
const lowercase = /[a-z]/;
const results = [];
for (let i = 0; i < input.length; i++) {
  let charCode = input[i].charCodeAt(0);
  if (uppercase.test(input[i])) {
    results.push(String.fromCharCode(((charCode - 65 + 13) % 26) + 65));
  } else if (lowercase.test(input[i])) {
    results.push(String.fromCharCode(((charCode - 97 + 13) % 26) + 97));
  } else {
    results.push(input[i]);
  }
}
console.log(results.join(""));
