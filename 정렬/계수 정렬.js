function solution(s) {
  let answer = "";
  let arr = new Array(26).fill(0);
  for (let x of s) {
    const index = x.charCodeAt(0) - 96;
    arr[index] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    while (arr[i] !== 0) {
      answer += String.fromCharCode(96 + i);
      arr[i] -= 1;
    }
  }
  return answer;
}

console.log(solution("hello"));
console.log(solution("algorithm"));
console.log(solution("abcda"));

console.log(String.fromCharCode(97));
