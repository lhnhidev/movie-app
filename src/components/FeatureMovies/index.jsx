import { useEffect, useMemo, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";

export default function FeatureMovies() {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data } = useFetch({ url: "movie/popular" });

  const { data: video } = useFetch(
    { url: `movie/${activeMovieId}/videos` },
    { enable: !!activeMovieId },
  );

  const moviesPopular = useMemo(() => data?.results?.slice(0, 4) || [], [data]);

  useEffect(() => {
    setActiveMovieId(moviesPopular[0]?.id);
  }, [moviesPopular]);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index >= moviesPopular.length) index = 0;
      setActiveMovieId(moviesPopular[index++]?.id);
    }, 5000);

    return () => clearInterval(interval);
  }, [moviesPopular]);

  return (
    <div className="relative">
      {moviesPopular
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => {
          return (
            <div key={movie.id}>
              <Movie
                movie={movie}
                trailerVideoKey={
                  (video?.results || []).find(
                    (item) =>
                      item.type === "Trailer" && item.site === "YouTube",
                  )?.key
                }
              ></Movie>
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
