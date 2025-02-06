// resolve <-> 값을 전달 할때 .then 을 사용
// reject <-> 에러를 전달 할때 .catch 를 사용
const amIsexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Yes you are");
});

amIsexy.then((value) => console.log(value));

// function 을 사용 해도 가능.
const thenFn = (value2) => console.log(value2);
amIsexy.then(thenFn);

const errIsexy = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "you are ugly");
});

errIsexy.catch((value3) => console.log(value3));

errIsexy
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
