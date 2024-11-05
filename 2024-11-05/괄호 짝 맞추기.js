function solution(strs) {
  let stack = [];

  for (let x of strs) {
    if (x === ")" && stack.length !== 0) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  return stack.length === 0 ? "True" : "False";
}

console.log(solution("(())()"));
console.log(solution("((())()"));
console.log(solution(")(())()"));
