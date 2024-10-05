function solution(sizes) {
    var answer = 0;
    let arr=sizes.map((item)=>item[0]>=item[1] ? [item[0],item[1]]:[item[1],item[0]])
    
    let x=arr.map(item=>item[0])
    let y=arr.map(item=>item[1])
    let maxX=Math.max(...x)
    let maxY=Math.max(...y)
    answer=maxX*maxY
    return answer;
}