// *Dynamic Routes -> url의 id 값 가져오는 방법
// export default async function MovieDetailsPage({ params, searchParams }) {
//   const { id } = await params;
//   console.log("params:", { id });
//   console.log("searchParams:", await searchParams);
//   return <h1>Movie Details</h1>;
// }

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return <h1>Movie Details:{id}</h1>;
}
