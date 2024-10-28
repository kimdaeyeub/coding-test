function solution(s) {
  var answer = -1;
  s = s.split("");
  let closes = ["]", "}", ")"];
  let opens = ["[", "{", "("];
  let count = 0;
  let result = [];
  while (count !== s.length - 1) {
    if (count !== 0) {
      const char = s.shift();
      s.push(char);
    }
    let queue = [];
    queue.push(s[0]);
    for (let i = 1; i < s.length; i++) {
      if (opens.includes(s[i])) {
        queue.push(s[i]);
        continue;
      }
      const index = opens.indexOf(queue[queue.length - 1]);
      if (index !== -1) {
        closes[index] === s[i] ? queue.pop() : queue.push(s[i]);
      } else {
        queue.push(s[i]);
      }
    }
    if (queue.length === 0) {
      result.push(true);
    }
    count++;
  }
  answer = result.length;
  return answer;
}
