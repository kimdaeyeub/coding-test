function solution(s) {
  s = s.split("");
  let stack = [];
  for (let x of s) {
    if (stack.length === 0) {
      stack.push(x);
    } else if (x === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
