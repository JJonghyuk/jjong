const list = {
  name: "jonghyuk",
  age: 15,
  email: "@naver.com",
};

// Object.values() --> 오브젝트의 값 노출
console.log(Object.values(list));

// Object.entries() --> key값의 이름과 값이 배열의 형태로 노출
console.log(Object.entries(list));
Object.entries(list).forEach((item) => console.log(item[0], item[1]));
// forEach로 key값의 이름과 값을 콘솔에 나타냄

// Object.fromEntries() --> 배열의 배열을 Object로 만들어 준다.
// 배열에는 2개씩 만 넣어야지 적용 된다
const list2 = [
  ["숫자", 1],
  ["영어", "a"],
  ["나이", 10],
  ["사실인가요", true],
];
console.log(Object.fromEntries(list2));
