// then, catch 는 구식의 방법
// then을 여러번 사용 하지 않고 await 하나 선언으로 여러줄 사용이 가능하다.
// async / await은 기본적으로 promise를 사용하는 코드를 더 좋게 보이게 하는 문법.
// await은 항상 async function 안에서만 사용 할수 있음.
// await -> wait 으로 생각하면됨 (promise가 끝나기를 기다리는거, Promise "순차 실행")
// ex) 실행 시간: 2초 + 2초 = 4초 (순차 실행이므로 느림)
// async function fetchDataSlow() {
//   let data1 = await fetchData();
//   let data2 = await fetchData();
//   console.log(data1, data2);
// }
// fetchDataSlow();
// ** await도 Promise.all()을 사용하면 병렬 실행 가능!

// await을 사용시에 사용한 데이터를 처리하고 그 다음으로 넘어가 처리한다.
// ex) --> 1 -> 2 -> 3 순으로 실행
// async function loadData() {
//   console.log("1. 데이터 요청");

//   let data = await fetchData(); // fetchData()가 끝날 때까지 기다림
//   console.log("3.", data);
// }

// loadData();
// console.log("2. 다른 작업 실행");

const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((potato) => console.log(potato))
    .catch((e) => console.log(`✔${e}`));
};

const getMoviesAsync = async () => {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json");
  console.log(response);
  const json = await response.json();
  console.log(json);
};

getMoviesAsync();
