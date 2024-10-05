function dfs(target,numbers,arr,depth,selected,result){
    if(depth===numbers.length){
        let char=""
        for(let i=0;i<numbers.length;i++){
            char+=selected[i]
            char+=numbers[i]
        }
        const calc=eval(char)
        if(calc===target){
            result.push(char)
        }
        return
    }
    for(let x of arr){
        selected.push(x)
        dfs(target,numbers,arr,depth+1,selected,result)
        selected.pop()
    }
}

function solution(numbers, target) {
    var answer = 0;
    let arr=["-","+"]
    let selected=[]
    let result=[]
    dfs(target,numbers,arr,0,selected,result)

    answer=result.length
    return answer;
}