function solution(participant, completion) {
  let data = {};
  // O(n)
  for (let x of participant) {
    if (data[x]) {
      data[x] += 1;
    } else {
      data[x] = 1;
    }
  }
  // O(n)
  for (let x of completion) {
    data[x] -= 1;
    if (data[x] === 0) delete data[x];
  }

  return Object.keys(data)[0];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); //"leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); //"vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); //"mislav"
