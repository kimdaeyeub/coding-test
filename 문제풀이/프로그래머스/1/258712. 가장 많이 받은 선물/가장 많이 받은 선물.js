function solution(friends, gifts) {
  var answer = 0;
  let arr = {};
  for (let i = 0; i < friends.length; i++) {
    let obj = {};
    friends.map((item, index) => {
      if (index !== i) {
        obj[item] = 0;
      }
    });

    obj["score"] = 0;
    arr[friends[i]] = obj;
  }

  for (let i = 0; i < gifts.length; i++) {
    const [n, m] = gifts[i].split(" ");
    arr[n][m] += 1;
    arr[m][n] -= 1;
    arr[m]["score"] -= 1;
    arr[n]["score"] += 1;
  }
  for (let i = 0; i < friends.length; i++) {
    const per = arr[friends[i]];
    let count = 0;
    for (let j = 0; j < friends.length; j++) {
      if (i === j) continue;

      if (per[friends[j]] > 0) {
        count += 1;
      } else if (per[friends[j]] === 0) {
        if (per["score"] > arr[friends[j]]["score"]) count += 1;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
}
