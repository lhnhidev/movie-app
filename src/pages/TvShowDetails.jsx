import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetails/Banner";
import ActorList from "@components/MediaDetails/ActorList";
import useFetch from "@hooks/useFetch";

export default function TvShowDetails() {
  const { id } = useParams();

  const { data: tvShowInfo, isLoading } = useFetch({
    url: `tv/${id}?append_to_response=content_ratings,aggregate_credits`,
  });

  const certification =
    (tvShowInfo?.content_ratings?.results || []).find(
      (show) => show?.iso_3166_1 === "US",
    )?.rating || "G";

  if (isLoading) return <Loading text="Loading..."></Loading>;

  const crew = tvShowInfo?.aggregate_credits?.crew
    ?.filter((member) => {
      return member.jobs.find(
        (item) => item.job === "Director" || item.job === "Writer",
      );
    })
    .reduce((acc, item) => {
      const newMember = {
        name: item.name,
        department:
          item.jobs.find((j) => j.job === "Director" || j.job === "Writer")
            ?.job === "Director"
            ? "Directing"
            : "Writing",
      };
      return [...acc, newMember];
    }, []);

  return (
    <>
      <Banner
        backdrop_path={tvShowInfo?.backdrop_path}
        title={tvShowInfo?.name}
        poster_path={tvShowInfo?.poster_path}
        release_date={tvShowInfo?.release_date}
        genres={tvShowInfo?.genres}
        vote_average={tvShowInfo?.vote_average}
        overview={tvShowInfo?.overview}
        certification={certification}
        crew={crew}
      ></Banner>
      <ActorList
        movieInfo={tvShowInfo}
        actors={tvShowInfo?.aggregate_credits?.cast || []}
        id={id}
        type="tv"
      ></ActorList>
    </>
  );
}
