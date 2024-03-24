function solution(s) {

    const numberWords = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    };

  
    Object.keys(numberWords).forEach(word => {
        const regex = new RegExp(word, "g"); 
        s = s.replace(regex, numberWords[word]);
    });

    return parseInt(s); 
}
