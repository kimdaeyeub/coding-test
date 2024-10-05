function solution(keymap, targets) {
  var answer = [];
  let obj = {};
  for (let x of keymap) {
    let key = x.split("");
    for (let i = 0; i < key.length; i++) {
      if (!obj[key[i]]) {
        obj[key[i]] = i + 1;
      } else {
        obj[key[i]] = Math.min(obj[key[i]], i + 1);
      }
    }
  }
  for (let x of targets) {
    let target = x.split("");
    let temp = 0;
    for (let i = 0; i < target.length; i++) {
      if (!obj[target[i]]) {
        temp = -1;
        break;
      }
      temp += obj[target[i]];
    }
    answer.push(temp);
  }
  return answer;
}