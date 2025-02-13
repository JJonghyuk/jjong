const emails = [
  "usol@naver.com",
  "solee@googl.com",
  "jjong@gmail.com",
  "hanaJJang@daum.com",
  "hana@gmail.com",
];

// forEach() --> array(배열)의 엘리먼트 마다 제공된 함수를 실행한다.
emails.forEach((item) => console.log(item.split("@")[0]));
// split() --> 어떠한 string을 나눠서 하나의 array에 만들어줌(입력한 string은 사라짐)
// ex) name.split(" ") --> 띄어쓰기를 기준으로 나눔
