// Array.of() --> 메서드는 인자의 수나 유형에 관계없이 가변 인자를 갖는 새 Array 인스턴스를 만듬.
const friends = Array.of("jonghyuk", "hana", "sole");
console.log(friends);

// Array.from() --> 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 복사해 새로운 Array 객체로 만들어 줌.
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((item) => {
  item.addEventListener("click", () => console.log("NodeList는 사용 되여"));
});
// NodeList --> forEach(Array 사용하는 메소드) 사용이 가능하다

const buttons2 = document.getElementsByClassName("btn");
console.log(buttons2);
// HTMLCollection --> array-like object(유사 배열 객체) 라고 부르는 객체로 Array이 아니다

// buttons2.forEach((item) => {
//   item.addEventListener("click", () => console.log("Array가 아니다"));
// });
// --> Array 아니라서 실행이 안된다 이럴때 Array.from()을 사용하여 Array로 만들어 주어 사용한다.

Array.from(buttons2).forEach((item) => {
  item.addEventListener("click", () =>
    console.log("Array.from() 사용하여 Array가 되다"),
  );
});
console.log(Array.from(buttons2));
// --> Array.from 를 사용하여 Array 객체로 만들어 사용하여 이벤트가 오류 없이 실행 된다.
