function solution(n) {
  const digits = Array.from(String(n), Number);
  console.log(digits);
  digits.sort((a, b) => b - a);
  const answer = Number(digits.join(""));
  return answer;
}

console.log(solution(118372));
