function solution(n, words) {
  var answer = [];
  let set = new Set();
  set.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const end = words[i - 1].split("").pop();
    const start = words[i].split("").shift();
    set.add(words[i]);
    if (end !== start || set.size !== i + 1) {
      return (answer = [
        (i + 1) % n === 0 ? n : (i + 1) % n,
        Math.ceil((i + 1) / n),
      ]);
    }
  }

  set.clear();
  words.map((word) => set.add(word));
  if (words.length === set.size) {
    return [0, 0];
  }
  return answer;
}