function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        // ASCII 코드값을 사용하여 숫자가 아닌 문자가 있는지 확인
        if (code < 48 || code > 57) {
            return false;
        }
    }
   
    return true;
}