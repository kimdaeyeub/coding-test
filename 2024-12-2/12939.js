function solution(s) {
  const arr = s.split(" ").map(Number);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${min} ${max}`;
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"
console.log(solution("-1 -1")); // "-1 -1"
