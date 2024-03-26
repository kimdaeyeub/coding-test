function solution(a, b, n) {
    var answer = 0;
    let remain=0
    
    while(a<=n){
        answer+=Math.floor(n/a)*b
        
        n=n-(Math.floor(n/a)*a)+Math.floor(n/a)*b
    }
    return answer;
}