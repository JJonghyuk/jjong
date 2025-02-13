// Array.prototype
const ArrayEmail = [
  "jong@gg.com",
  "jonghyuk@gogle.com",
  "hana@naver.com",
  "sole@gmail.com",
];

// find() --> 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환함.
const findTarget = ArrayEmail.find((item) => item.includes("@gmail"));
console.log(findTarget);

// findIndex() --> 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환한다.
// 만족하는 요소가 없으면 -1을 반환함.
const check = () =>
  ArrayEmail.findIndex((friend) => friend.includes("gogle.com"));
let target = check();

if (target !== -1) {
  console.log(target);
  const username = ArrayEmail[target].split("@")[0];
  const email = "korea.com";

  ArrayEmail[target] = `${username}@${email}`;
  target = check();
}
console.log(ArrayEmail);

// fill() --> 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움.
const ArrayEmail2 = [
  "jong@gg.com",
  "jonghyuk@gogle.com",
  "hana@naver.com",
  "sole@gmail.com",
  "jong@naver.com",
  "hana@naver.com",
];
const check2 = () => ArrayEmail2.findIndex((item) => item.includes("naver"));
target = check2();
console.log(target);
if (target !== -1) {
  ArrayEmail2.fill("*".repeat(5), target);
}
console.log(ArrayEmail2);

const ArrayEmail3 = [
  "jong3@gg.com",
  "jonghyuk3@gogle.com",
  "hana3@naver.com",
  "sole3@gmail.com",
  "jong3@naver.com",
  "hana3@naver.com",
];
ArrayEmail3.fill("*".repeat("5"), 2, 4);
console.log(ArrayEmail3);
