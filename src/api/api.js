import axios from "axios";

export const getMovies = async () => {
  const movie = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=c22a8338d5fa0f837c3f73b89b83e890"
  );
  
  return movie.data.results;
};
