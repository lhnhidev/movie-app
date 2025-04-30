import { useEffect, useState } from "react";
import { OPTIONS_GET, URL_POPULAR_MOVIES } from "../../libs/constants";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

export default function FeatureMovies() {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch(URL_POPULAR_MOVIES, OPTIONS_GET)
      .then((res) => res.json())
      .then((data) => {
        setMoviesPopular(data.results.slice(16, 20));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setActiveMovieId(moviesPopular[0]?.id);
  }, [moviesPopular]);

  useEffect(() => {
    let index = 1;
    setInterval(() => {
      if (index >= moviesPopular.length) index = 0;
      setActiveMovieId(moviesPopular[index++]?.id);
    }, 5000);
  }, [moviesPopular]);

  return (
    <div className="relative">
      {moviesPopular
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => {
          return (
            <div key={movie.id}>
              <Movie movie={movie}></Movie>
              <PaginateIndicator
                movies={moviesPopular}
                activeMovieId={activeMovieId}
                setActiveMovieId={setActiveMovieId}
              ></PaginateIndicator>
            </div>
          );
        })}
    </div>
  );
}
