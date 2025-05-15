import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetails/Banner";
import ActorList from "@components/MediaDetails/ActorList";
import useFetch from "@hooks/useFetch";

export default function MovieDetails() {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `movie/${id}?append_to_response=release_dates,credits,videos`,
  });

  const certification =
    (
      (movieInfo?.release_dates?.results || []).find(
        (movie) => movie.iso_3166_1 === "US",
      )?.release_dates || []
    ).find((item) => item.certification != "")?.certification || "G";

  if (isLoading) return <Loading text="Loading..."></Loading>;

  return (
    <>
      <Banner
        backdrop_path={movieInfo?.backdrop_path}
        title={movieInfo?.title}
        poster_path={movieInfo?.poster_path}
        release_date={movieInfo?.release_date}
        genres={movieInfo?.genres}
        vote_average={movieInfo?.vote_average}
        overview={movieInfo?.overview}
        certification={certification}
        crew={movieInfo.credits?.crew}
        trailerVideoKey={
          (movieInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      ></Banner>
      <ActorList
        movieInfo={movieInfo}
        actors={movieInfo?.credits?.cast || []}
        id={id}
        type="movie"
      ></ActorList>
    </>
  );
}
