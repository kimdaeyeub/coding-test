const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, k, m] = input[0].split(" ").map(Number);

// 각 실제 역에서 연결된 하이퍼튜브를 저장
let stationToHyperTube = new Array(n + 1).fill(null).map(() => new Set());
// 각 하이퍼튜브에서 연결된 실제 역을 저장
let hyperTubeStations = new Array(m);

for (let i = 1; i <= m; i++) {
  const stations = input[i].split(" ").map(Number);
  hyperTubeStations[i - 1] = new Set(stations);
  stations.forEach((station) => {
    stationToHyperTube[station].add(i - 1);
  });
}

function bfs() {
  let visited = new Array(n + 1).fill(false);
  let visitedHyperTube = new Array(m).fill(false);
  let q = [];
  q.push(1);
  visited[1] = true;
  let steps = 1;

  while (q.length > 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      const station = q.shift();
      if (station === n) return steps;

      // 실제 역에서 연결된 하이퍼튜브 탐색
      stationToHyperTube[station].forEach((hyperTube) => {
        if (visitedHyperTube[hyperTube]) return;

        // 하이퍼튜브를 통해 연결된 다른 실제 역 탐색
        hyperTubeStations[hyperTube].forEach((nextStation) => {
          if (!visited[nextStation]) {
            visited[nextStation] = true;
            q.push(nextStation);
          }
        });

        visitedHyperTube[hyperTube] = true;
      });
    }
    steps++;
  }

  return -1;
}

console.log(bfs());
