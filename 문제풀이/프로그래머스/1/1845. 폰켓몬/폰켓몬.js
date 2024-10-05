function dfs(depth,result,selected,nums,n,visited){
    if(depth===n/2){
        let set=new Set()
        selected.map(item=>set.add(item))
        if(set.size===selected.length){
            result.push(set.size)
        }
        return;
    }
    for(let i=0;i<n;i++){
        if(visited[i])continue
        visited[i]=true
        selected.push(nums[i])
        dfs(depth+1,result,selected,nums,n,visited)
        selected.pop()
        visited[i]=false
    }
}

function solution(nums) {
    var answer = 0;
    const n=nums.length
    let set=new Set()
    nums.map(item=>set.add(item))
    if(set.size<n/2){
        return set.size
    }else{
        return n/2
    }
    // let result=[]
    // let selected=[]
    // let visited=new Array(n).fill(false)
    // dfs(0,result,selected,nums,n,visited)
    // answer=Math.max(...result)
    
    
    return answer;
}