function isValid(x, y) {
  return x >= -5 && x <= 5 && y >= -5 && y <= 5;
}

function updateLocation(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "L":
      return [x - 1, y];
    case "R":
      return [x + 1, y];
  }
}

function solution(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Set();
  for (const dir of dirs) {
    const [nx, ny] = updateLocation(x, y, dir);
    if (!isValid(nx, ny)) {
      continue;
    }
    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }
  return visited.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
