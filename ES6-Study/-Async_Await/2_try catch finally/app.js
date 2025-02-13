// try catch는 python에서도 사용하는것
// try 안에 실행 할 내용을 적고, 그 내용에서 에러가 있는 경우 catch에서 에러를 알려줌
// catch가 await에서 있는 에러만 잡는게 아닌 try 안에 있는것도 다 잡음
// finally 도 catch 다음에 작성 가능.
const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("we are done");
  }
};

getMoviesAsync();
