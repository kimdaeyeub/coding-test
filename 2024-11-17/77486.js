function generateGraph(enroll, referral) {
  let graph = {};
  for (let i = 0; i < enroll.length; i++) {
    graph[enroll[i]] = referral[i];
  }
  return graph;
}

function generateValue(enroll) {
  let value = {};
  for (let i = 0; i < enroll.length; i++) {
    value[enroll[i]] = 0;
  }
  return value;
}

function solution(enroll, referral, seller, amount) {
  var answer = [];
  const graph = generateGraph(enroll, referral);
  let value = generateValue(enroll);
  for (let i = 0; i < seller.length; i++) {
    let curName = seller[i];
    let money = amount[i] * 100;

    while (money > 0 && curName !== "-") {
      value[curName] += money - Math.floor(money / 10);
      curName = graph[curName];

      money = Math.floor(money / 10);
    }
  }
  return Object.values(value);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
); // [360, 958, 108, 0, 450, 18, 180, 1080]
