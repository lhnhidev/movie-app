import MovieCard from "@components/MovieCard";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [searchParam] = useSearchParams();
  const mediaParam = searchParam.get("media-type");

  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: ["tv", "movie"].includes(mediaParam) ? mediaParam : "movie",
    genres: [],
    rating: "All",
  });

  useEffect(() => {
    setSearchFormValues((prev) => ({
      ...prev,
      mediaType: ["tv", "movie"].includes(mediaParam) ? mediaParam : "movie",
    }));
  }, [mediaParam]);

  const { mediaType, genres, rating } = searchFormValues;
  const gte = rating.slice(0, rating.indexOf("-")) / 10;
  const lte = rating.slice(rating.indexOf("-") + 1, rating.length) / 10;

  const { data } = useFetch({
    url: `discover/${mediaType}?&sort_by=popularity.desc&with_genres=${genres.join(",")}${rating === "All" ? "" : `&vote_average.gte=${gte}&vote_average.lte=${lte}`}`,
  });

  return (
    <div className="mt-14 min-h-[calc(100vh-56px)] bg-slate-950 p-8 text-white lg:mt-20 lg:min-h-[calc(100vh-80px)]">
      <div className="container flex-col">
        <p className="mb-3 text-2xl font-bold">Search</p>
        <div className="flex gap-6">
          <div className="flex-1">
            <SearchForm
              key={searchFormValues.mediaType}
              searchFormValues={searchFormValues}
              setSearchFormValues={setSearchFormValues}
            ></SearchForm>
          </div>

          <div className="flex-[3]">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {(data?.results || []).map((media) => {
                return (
                  <MovieCard
                    key={media?.id}
                    id={media?.id}
                    poster={media?.poster_path}
                    title={media?.title || media?.name}
                    point={media?.vote_average}
                    date={media?.release_date || media?.first_air_date}
                    mediaType={searchFormValues.mediaType}
                  ></MovieCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
