function solution(people, limit) {
  people.sort((a, b) => a - b);

  let count = 0;
  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    count++;
  }

  return count;
}
