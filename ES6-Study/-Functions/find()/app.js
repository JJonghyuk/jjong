const email = [
  "usol@naver.com",
  "solee@googl.com",
  "jjong@gmail.com",
  "hanaJJang@daum.com",
  "hana@gmail.com",
];

// find() --> array(배열)의 제공되는 함수 조건을 만족하는 첫 번째 엘리먼트를 리턴한다.
const foundMail = email.find((item) => item.includes("@gmail.com"));

// includes() --> 조건에 맞는 String 을 찾아 주며, true 또는 false를 반환한다.
// ex) includes("park")

console.log(foundMail);
