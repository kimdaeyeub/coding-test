function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 시간을 저장하는 변수
  let bridge = Array(bridge_length).fill(0); // 다리를 모델링하는 큐, 초기에는 모두 0으로 채움
  let currentWeight = 0; // 현재 다리 위의 총 무게

  while (truck_weights.length > 0 || currentWeight > 0) {
    time++; // 시간을 1초 증가
    currentWeight -= bridge.shift(); // 다리에서 트럭이 하나 나감 (큐의 첫 번째 요소를 제거하고 그 무게만큼 현재 무게에서 빼줌)

    // 대기 중인 트럭이 있고, 다음 트럭을 다리에 올릴 수 있는 경우
    if (
      truck_weights.length > 0 &&
      currentWeight + truck_weights[0] <= weight
    ) {
      let nextTruck = truck_weights.shift(); // 대기열에서 트럭 하나를 꺼냄
      bridge.push(nextTruck); // 다리에 트럭을 올림
      currentWeight += nextTruck; // 현재 다리 위의 총 무게에 추가
    } else {
      bridge.push(0); // 다리에 트럭을 추가하지 못하는 경우, 0을 삽입하여 시간을 맞춤
    }
  }

  return time;
}
