import MovieCard from "@components/MovieCard";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { useState } from "react";

export default function SearchPage() {
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });

  const {mediaType, genres, rating} = searchFormValues;

  const { data } = useFetch({ url: `discover/${mediaType}?with_genres=${genres.join(",")}` });
  console.log(data);

  return (
    <div className="mt-14 bg-slate-950 p-8 text-white lg:mt-20">
      <div className="container flex-col">
        <p className="mb-3 text-2xl font-bold">Search</p>
        <div className="flex gap-6">
          <div className="flex-1">
            <SearchForm
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
