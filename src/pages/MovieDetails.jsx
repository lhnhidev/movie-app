import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetails/Banner";
import ActorList from "@components/MediaDetails/ActorList";
import useFetch from "@hooks/useFetch";

export default function MovieDetails() {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `movie/${id}?append_to_response=release_dates,credits`,
  });

  if (isLoading) return <Loading text="Loading..."></Loading>;

  return (
    <>
      <Banner mediaInfo={movieInfo}></Banner>
      <ActorList
        movieInfo={movieInfo}
        actors={movieInfo?.credits?.cast || []}
        id={id}
      ></ActorList>
    </>
  );
}
