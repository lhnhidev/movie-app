import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";
import { useMemo } from "react";

export default function RelatedMediaList({ type, id, title }) {
  const { data } = useFetch({
    url:
      type === "actor"
        ? `person/${id}/combined_credits`
        : `${type}/${id}/recommendations`,
  });
  const relatedMediaList = useMemo(() => {
    if (type === "actor") return data?.cast || [];
    return data?.results || [];
  }, [data, type]);

  return (
    <>
      <p className="mb-3 text-[18px] font-bold">{title}</p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {relatedMediaList.map((media) => {
          return (
            <MovieCard
              // key={media?.id}
              key={crypto.randomUUID()}
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
