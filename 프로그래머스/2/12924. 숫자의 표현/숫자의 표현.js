function solution(n) {
    let count = 0;
    for (let k = 1; k * (k + 1) / 2 <= n; k++) {
        if (k % 2 === 1 && n % k === 0) {
            count++;
        } else if (k % 2 === 0 && n % k === k / 2) {
            count++;
        }
    }
    return count;
}
