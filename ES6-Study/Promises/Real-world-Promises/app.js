// Stream -> byte 1, 0 을 의미

// fetch ->> 다른 url 에서 정보를 가져오는것
// fetch("https://google.com")
// .then((response) => console.log(response))
// .catch((e) => console.log(`X ${e}`));

fetch("http://127.0.0.1:5500/Promises/Real-world-Promises/index.html")
  .then((response) => response.text())
  // .then((potato) => console.log(potato))
  .catch((e) => console.log(`X ${e}`));

fetch("https://yts.mx/api/v2/list_movies.json")
  .then((response) => {
    // console.log(response);
    return response.json(); // json을 실행해 데이터를 가져옴
  })
  .then((potato) => console.log(potato)) // 인자값 네이밍은 하고 싶은데로 해도 됨
  .catch((e) => console.log(`X ${e}`));
