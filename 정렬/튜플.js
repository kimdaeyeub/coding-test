function solution(s) {
  const strings = s
    .split("")
    .filter((item) => item !== "{" && item !== "}")
    .join("")
    .split(",");

  const arr = {};
  for (let x of strings) {
    if (!arr[x]) arr[x] = 0;
    arr[x] += 1;
  }
  let results = [];
  for (const [key, value] of Object.entries(arr)) {
    results.push([key, value]);
  }
  return results.sort((a, b) => b[1] - a[1]).map((item) => Number(item[0]));
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
