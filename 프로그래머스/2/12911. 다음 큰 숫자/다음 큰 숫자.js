function solution(n) {
    var answer = 0;
    let binaN=n.toString(2)
    let one=0
    for(let i=0;i<binaN.length;i++){
        if(binaN[i]==="1"){
            one++
        }
    }
    let binaSOne=0
    let temp=1
    while(true){
        const binaS=(n+temp).toString(2)
        for(let i=0;i<binaS.length;i++){
            if(binaS[i]==="1"){
                binaSOne++
            }
        }
        if(binaSOne===one){
            answer=n+temp
            break
        }
        temp++
        binaSOne=0
    }
    return answer;
}