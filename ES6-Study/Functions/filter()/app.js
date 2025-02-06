const emails = [
  "usol@naver.com",
  "solee@googl.com",
  "jjong@gmail.com",
  "hanaJJang@daum.com",
  "hana@gmail.com",
];

// filter() --> array(배열)의 제공되는 함수의 조건을 만족한 모든 엘리먼트로 새로운 array(배열)로 만든다.
const noGmail = emails.filter((item) => !item.includes("@gmail.com"));

// includes() --> 조건에 맞는 String 을 찾아 주며, true 또는 false를 반환한다.
// ex) includes("park")

console.log(noGmail);
