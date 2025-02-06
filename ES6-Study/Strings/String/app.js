// [Point]
// 1. includes()
// 2. repeat()
// 3. startsWith() & endsWith()

// includes() - 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.
const isEmail = (email) => email.includes("@");

console.log(isEmail("jonghyuk@naver.com"));
// 값 ==> true

// repeat() - 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
const CC_NUMBER = "6060";
const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

console.log(displayName);
// 값 ==> **********6060

// startsWith() - 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환합니다.
// endsWith() - 메서드를 사용하여 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환한다.
const name2 = "Mr.Jonghyuk";

console.log(name2.startsWith("Mr"));
console.log(name2.endsWith("Jonghyuk"));
// 값 ==> true
