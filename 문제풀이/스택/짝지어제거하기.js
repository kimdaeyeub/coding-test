function solution(s) {
  let stack = [];
  for (let x of s.split("")) {
    if (stack.length === 0) {
      stack.push(x);
      continue;
    }
    if (stack[stack.length - 1] === x) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
  return stack.length >= 1 ? 0 : 1;
}
console.log(solution("baabaa")); //0
console.log(solution("cdcd")); //0
