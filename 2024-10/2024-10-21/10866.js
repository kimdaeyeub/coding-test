// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let deque = [];
let results = [];
for (let i = 1; i <= N; i++) {
  const [command, value] = input[i].split(" ");
  switch (command) {
    case "push_front":
      deque.unshift(value);
      break;
    case "push_back":
      deque.push(value);
      break;
    case "pop_front":
      if (deque.length === 0) {
        // -1ㄹ턴
        results.push(-1);
      } else {
        const item = deque.shift();
        results.push(item);
      }
      break;
    case "pop_back":
      if (deque.length === 0) {
        results.push(-1);
      } else {
        const item = deque.pop();
        results.push(item);
      }
      break;
    case "size":
      results.push(deque.length);
      break;
    case "empty":
      results.push(deque.length === 0 ? 1 : 0);
      break;
    case "front":
      if (deque.length === 0) {
        results.push(-1);
      } else {
        results.push(deque[0]);
      }
      break;
    case "back":
      if (deque.length === 0) {
        results.push(-1);
      } else {
        results.push(deque[deque.length - 1]);
      }
      break;
  }
}

console.log(results.join("\n"));
