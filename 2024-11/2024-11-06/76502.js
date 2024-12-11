function isValid(arr) {
  let stack = [];
  for (let x of arr) {
    if (stack.length == 0) {
      stack.push(x);
    } else if (x === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (x === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (x === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  return stack.length === 0 ? true : false;
}

function solution(s) {
  let count = 0;
  let repeat = 0;
  s = s.split("");
  while (repeat !== s.length) {
    repeat++;
    const data = s.shift();
    s.push(data);
    if (isValid(s)) {
      count++;
    }
  }
  return count;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
