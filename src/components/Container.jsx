export function Container() {
  return (
    <>
      <section>
        <div className="w-full mx-auto text-center">
          <h1 className="font-bold text-5xl p-4">Movie List</h1>
        </div>
        <div className="container w-full mx-auto my-10 flex flex-wrap gap-12 items-center justify-center">
          <PopularMovieList />
        </div>
      </section>
    </>
  );
}
