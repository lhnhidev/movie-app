import MovieCard from "@components/MovieCard";
import { OPTIONS_GET } from "@libs/constants";
import { getUrlRelatedMovie } from "@libs/utils";
import { useEffect, useState } from "react";

export default function RelatedMediaList({ id }) {
  const [relatedMediaList, setRelatedMediaList] = useState([]);

  useEffect(() => {
    fetch(getUrlRelatedMovie(id), OPTIONS_GET)
      .then((response) => response.json())
      .then((data) => {
        setRelatedMediaList(data.results);
      });
  }, [id]);

  return (
    <>
      <p className="mb-3 text-[18px] font-bold">More like this</p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {relatedMediaList.map((media) => {
          return (
            <MovieCard
              key={media.id}
              id={media?.id}
              poster={media?.poster_path}
              title={media?.title || media?.name}
              point={media?.vote_average}
              date={media?.release_date || media?.first_air_date}
              mediaType={media?.media_type}
            ></MovieCard>
          );
        })}
      </div>
    </>
  );
}
