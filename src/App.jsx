import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { getMovies } from "./api/api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovies().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  // console.log(popularMovies);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i} className="flex flex-col w-[300px] rounded-xl shadow-lg">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="w-full rounded-t-xl"
          />
          <div className="p-2">
            <div className="font-bold text-base">{movie.title}</div>
            <p className="text-gray-700 text-base ">
              Rating: {movie.popularity}
            </p>
            <p className="text-gray-700 text-base">
              Date: {movie.release_date}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Navbar />
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

export default App;
