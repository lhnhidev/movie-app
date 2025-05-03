import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetails/Banner";
import ActorList from "@components/MediaDetails/ActorList";
import { getUrlDetailsMovie } from "@libs/utils";
import { OPTIONS_GET } from "@libs/constants";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(getUrlDetailsMovie(id), OPTIONS_GET)
      .then((response) => response.json())
      .then((data) => {
        setMovieInfo(data);
      })
      .catch((error) => {
        return new Error(error);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loading text="Loading..."></Loading>;

  return (
    <>
      <Banner mediaInfo={movieInfo}></Banner>
      <ActorList movieInfo={movieInfo} actors={movieInfo?.credits?.cast || []} id={id}></ActorList>
    </>
  );
}
