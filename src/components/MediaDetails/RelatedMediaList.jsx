import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";
import { useMemo } from "react";

export default function RelatedMediaList({ type, id }) {
  const { data } = useFetch({ url: `${type}/${id}/recommendations` });
  const relatedMediaList = useMemo(() => data?.results || [], [data]);

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
