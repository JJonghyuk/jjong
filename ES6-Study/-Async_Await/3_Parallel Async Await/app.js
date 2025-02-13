// Async(비동기) Parallel(병렬) --> promise.all()
// promise.all()을 사용해서 순차적인 아닌 동시에 실행하는 방법
const getMoviesAsync = async () => {
  try {
    const [moviesResponse, upcomingResponse] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"),
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100"),
    ]);

    const [movies, upcoming] = await Promise.all([
      moviesResponse.json(),
      upcomingResponse.json(),
    ]);

    console.log(movies, upcoming);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("we are done");
  }
};

getMoviesAsync();
