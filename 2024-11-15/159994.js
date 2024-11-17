function solution(cards1, cards2, goal) {
  let result = true;
  while (goal.length !== 0) {
    const item = goal.shift();

    if (cards1[0] === item) {
      cards1.shift();
    } else if (cards2[0] === item) {
      cards2.shift();
    } else {
      result = false;
      break;
    }
  }
  return result ? "Yes" : "No";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "No"
