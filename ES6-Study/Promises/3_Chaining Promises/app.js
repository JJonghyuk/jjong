// then 을 여러개 할때는 return 을 해줘야 한다.
// resolve, reject 둘 중 하나가 실행 되면은 나머지 한개는 실행이 되지 않는다.
const amlsexy = new Promise((resolve, reject) => {
  resolve(2);
});

amlsexy
  .then((number) => {
    return number * 2;
  })
  .then((number) => {
    console.log(number * 2);
  });

//
const amlDouble = new Promise((resolve, reject) => {
  resolve(2);
});
const timesTwo = (numbertwo) => numbertwo * 2;

amlDouble
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(() => {
    throw Error("something is wrong");
  })
  .then((lastNumber) => console.log(lastNumber))
  .catch((error) => console.log(error));
// throw - 는 강제로 예외를 발생시킵니다.
// new Error("메시지")를 사용하면 오류 메시지를 포함한 Error 객체가 생성됩니다.
