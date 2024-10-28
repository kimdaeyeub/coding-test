function solution(s) {
  var answer = "";
  let words = s.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");
    for (let j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        word[j] = word[j].toUpperCase();
      }
    }
    words[i] = word.join("");
  }
  answer = words.join(" ");
  return answer;
}
