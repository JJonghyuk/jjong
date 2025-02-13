// *비동기 로직*
// 비동기 로직은 작업이 완료될 때까지 기다리지 않고, 다른 작업을 동시에 수행할 수 있는 방식
// 즉, 이전 작업이 끝날 때까지 멈추지 않고, 다음 코드가 계속 실행
// 동기 방식은 기본 스크립트 생각하면 됨
// Promise (ES6) - 비동기 작업이 성공(fulfilled) 또는 실패(rejected) 상태가 되면 처리하는 방식.

const amIsexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Yes you are");
});
// resolve --> 값 , reject --> 에러

console.log(amIsexy);

setInterval(console.log, 1000, amIsexy);
