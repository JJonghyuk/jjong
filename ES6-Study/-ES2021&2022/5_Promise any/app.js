// promise.all() --> 모든 데이터를 받아, 다 로딩되는걸 기다린다.
// promise.any() --> 작업이 여러개 중에 "성공적으로 이행" 된걸 반환 한다.

// promise.race와 promise.any의 차이

// 1) promise.race
// 가장 먼저 "확정"된 걸 반환합니다. 여기서 확정이란, 성공이든 실패든 상관없이 반환된 걸 의미합니다. 만약 가장 먼저 결과가 나온 프로미스가 실패라면, race는 그 실패를 반환할겁니다.

// 2) promise.any
// 가장 먼저 "성공적으로 이행"(fulfill)된 걸 반환합니다. 여기서 이행이란, 성공이 반환된 걸 의미합니다. 만약 가장 먼저 결과가 나온 프로미스가 실패라면, any는 다른 프로미스의 응답을 기다립니다. 만약 다른 모든 프로미스가 실패를 반환하면, 그제서야 실패를 반환합니다.

const p1 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "quick");
});

const p2 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "slow");
});

Promise.any([p1, p2]).then(console.log);
// --> quick (p1이 제일 먼저 성공적으로 실행 됨으로 반환됨.)

const p11 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "quick");
});

const p22 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, "slow");
});

Promise.any([p11, p22]).then(console.log).catch(console.log);
// --> AggregateError: All promises were rejected (모든 프모리스가 실패 했다는 에러)

Promise.any([p11, p22])
  .then(console.log)
  .catch((e) => {
    console.log(e.errors);
  });
