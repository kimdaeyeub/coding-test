function solution(n) {
    let d = new Array(n + 1).fill(0);
    d[0] = 0;
    d[1] = 1;
    for (let i = 2; i <= n; i++) {
        d[i] = (d[i - 1] + d[i - 2]) % 1234567;
    }
    return d[n];
}
