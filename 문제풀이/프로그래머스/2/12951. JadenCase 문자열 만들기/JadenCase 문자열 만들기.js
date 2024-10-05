function solution(s) {
    if(s.length<1||s.length>200) return ''
    var answer = '';
    answer=s.toLowerCase().split(" ").map((item)=>item===""?"":item[0].toUpperCase()+item.substring(1)).join(" ")
    
    return answer;
}