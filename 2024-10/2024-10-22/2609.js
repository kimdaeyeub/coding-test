const fs = require("fs");

const [A, B] = fs.readFileSync("./input.txt").toString().trim().split(" ");

let results = [];
let arrA = [];
for (let i = 1; i <= A; i++) {
  if (A % i === 0) {
    arrA.push(i);
  }
}

let arrB = [];
for (let i = 1; i <= B; i++) {
  if (B % i === 0) {
    arrB.push(i);
  }
}

let pointerA = arrA.length - 1;
let pointerB = arrB.length - 1;

while (pointerA >= 0 && pointerB >= 0) {
  if (arrA[pointerA] === arrB[pointerB]) {
    results.push(arrA[pointerA]);
    break;
  } else if (arrA[pointerA] > arrB[pointerB]) {
    pointerA--;
  } else {
    pointerB--;
  }
}

arrA = [];
arrB = [];

for (let i = 1; i <= B; i++) {
  arrA.push(i * A);
}

for (let i = 1; i <= A; i++) {
  arrB.push(i * B);
}

pointerA = 0;
pointerB = 0;

while (pointerA < arrA.length && pointerB < arrB.length) {
  if (arrA[pointerA] === arrB[pointerB]) {
    results.push(arrA[pointerA]);
    break;
  } else if (arrA[pointerA] > arrB[pointerB]) {
    pointerB++;
  } else {
    pointerA++;
  }
}

console.log(results.join("\n"));
