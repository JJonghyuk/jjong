// finally는 값, 에러 상관 없이 마지막에 항상 실행 됨
// API 요청 후 로딩 화면을 닫을 때 유용함.
const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "First");
})
  .then((value) => console.log(value))
  .catch((e) => console.log(`${e}error`))
  .finally(() => console.log("Im done"));
