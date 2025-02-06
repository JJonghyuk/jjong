const emails = [
  "usol@naver.com",
  "solee@googl.com",
  "jjong@gmail.com",
  "hanaJJang@daum.com",
  "hana@gmail.com",
];

// map() --> array(배열)의 엘리먼트 마다 제공된 함수를 실행하며, 반환된 element들로 새로운 array(배열)을 만들어준다
const cleaned = emails.map((item, index) => ({
  username: item.split("@")[0],
  index,
}));
// implicit return(암시적 반환)은 {}(코드 블럭)을 쓰면 사용하지 못하고 ()을 같이쓰면 object도 가능 해진다.
// explicit return (명시적 반환)은 return 사용하여 반환값을 명시한다.
// index: index --> 키와 값이 동일한 네이밍 일 경우 index 하나로 사용 가능하다.

// split() --> 어떠한 string을 나눠서 하나의 array에 만들어줌(입력한 string은 사라짐)
// ex) name.split(" ") --> 띄어쓰기를 기준으로 나눔

console.log(cleaned);
