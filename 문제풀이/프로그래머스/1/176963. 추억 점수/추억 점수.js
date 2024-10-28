function solution(name, yearning, photo) {
  var answer = [];
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      let peo = photo[i][j];
      if (!obj[peo]) continue;
      score += obj[peo];
    }
    answer.push(score);
  }

  return answer;
}
