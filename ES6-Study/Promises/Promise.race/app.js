const p1 = new Promise((resolve) => {
  setTimeout(resolve, 10000, "First");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "second");
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "third");
});

Promise.race([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
// race는 all과 다르게 제일 빨리 실행 되는거 1개만 실행이 된다.
// resolve, reject 상관 없이 제일 빠른 1개만 실행됨
