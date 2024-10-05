function solution(n, m) {
    var answer = [];
    let maxN=[]
    let maxM=[]
    let max=0
    for(let i=1;i<=n;i++){
        if(n%i===0){
            maxN.push(i)
        }
    }
    for(let i=1;i<=m;i++){
        if(m%i===0){
            maxM.push(i)
        }
    }
    max=Math.max(...maxN.filter(item=>maxM.includes(item)))
    let small=0
    let big=Math.max(n,m)
    let smallN=[]
    let smallM=[]
    for(let i=1;i<=big;i++){
        smallN.push(n*i)
        smallM.push(m*i)
    }
    console.log(smallN,smallM,big)
    small=Math.min(...smallN.filter(item=>smallM.includes(item)))
    answer=[max,small]
    return answer;
}