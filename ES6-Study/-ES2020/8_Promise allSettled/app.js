// Promise.allSettled() --> 모든 promise가 성공할 필요 없이, promise가 끝나면 노출 되며, Promise.all() 이랑 다르게  object로 나타난다
// Promise.allSettled() - 모든 promise가 잘 작동하는지 확인할 필요가 없을때 사용 하면 좋다.
// all() - 서로 상관이 있는 promise 동작 시킬때 사용, 모두 작동하는지 확인하는게 중요하면 사용한다.

const p = Promise.allSettled([
  fetch("https://yts.mx/api/v2/movie_details.json"),
  fetch(),
  fetch("https://yts.mx/api/v2/movie_details.json"),
  fetch(),
])
  .then((response) => console.log("성공!", response))
  .catch((e) => console.log("에러가 났어:", e));
