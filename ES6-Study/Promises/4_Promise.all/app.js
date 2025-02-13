const p1 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "First");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "second");
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "third");
});

const motherPromise = Promise.all([p1, p2, p3]);
// Promise가 제대로 작동하는지 확인 하기 위해서 all 을 사용하면 좋다.
// Promise.all()은 다 실행이 되고 한번에 실행 되어 나타난다.
// 한개라도 error가 나올 경우 나머지는 실행되지 않고 에러가 나타난다.

motherPromise
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
