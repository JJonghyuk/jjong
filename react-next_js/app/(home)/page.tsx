export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // return fetch(URL).then(response => response.json());
  // 한줄로 표현 가능하다.
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
