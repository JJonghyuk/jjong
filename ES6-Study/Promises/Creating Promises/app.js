// 비동기 로직
// Promise (ES6) - 비동기 작업이 성공(fulfilled) 또는 실패(rejected) 상태가 되면 처리하는 방식.

const amIsexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Yes you are");
});
// resolve --> 값 , reject --> 에러

console.log(amIsexy);

setInterval(console.log, 1000, amIsexy);
