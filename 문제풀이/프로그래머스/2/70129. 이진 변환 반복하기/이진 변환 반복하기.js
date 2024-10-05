

function solution(s) {
    let count=0
    let zero=0

    while(s!=="1"){
        if(s==="1"){
        return;
    }
    s.split("").map((item)=>{
        if(item==="0"){
            zero+=1
        }
    })
    let arr=s.split("").filter((item)=>item!=="0")
    let leng=arr.length
    
    s=leng.toString(2)
    count++
    }
    return [count,zero]
}

