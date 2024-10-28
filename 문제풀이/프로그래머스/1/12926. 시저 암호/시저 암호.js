function solution(s, n) {
  const upperA = "A".charCodeAt(0);
  const lowerA = "a".charCodeAt(0);
  const alphabetCount = 26;

  return s
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
          ((code - upperA + n) % alphabetCount) + upperA,
        );
      } else if (char >= "a" && char <= "z") {
        return String.fromCharCode(
          ((code - lowerA + n) % alphabetCount) + lowerA,
        );
      }
      return char;
    })
    .join("");
}
