import { useState } from "react";
import RelatedMediaList from "@components/MediaDetails/RelatedMediaList";
import ActorInfo from "./ActorInfo";
import MovieInfomation from "./MovieInfomation";

export default function ActorList({ movieInfo, actors, id, type }) {
  const [isShowMore, setIsShowMore] = useState(true);

  const arrayActors = isShowMore ? (actors || []).slice(0, 4) : actors;

  return (
    <div className="bg-slate-950 px-8 py-5 text-white">
      <div className="mx-auto flex max-w-5xl gap-6">
        <div className="flex-[2]">
          <p className="mb-3 text-[18px] font-bold">Actor</p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {(arrayActors || []).map((actor) => (
              <ActorInfo
                test={console.log(actor)}
                key={actor.id}
                id={actor.id}
                name={actor.name}
                profilePath={actor.profile_path}
                character={
                  actor.character ||
                  (actor.roles || []).map((item) => item.character).join("/")
                }
                episode={actor.roles[0]?.episode_count || 0}
              ></ActorInfo>
            ))}
          </div>

          <p
            className="mt-4 inline-block cursor-pointer px-2 py-1"
            onClick={() => setIsShowMore(!isShowMore)}
          >
            {isShowMore ? "Show More" : "Show Less"}
          </p>

          <div className="mt-6">
            <RelatedMediaList id={id} type={type}></RelatedMediaList>
          </div>
        </div>
        <div className="flex-1">
          <MovieInfomation movieInfo={movieInfo || {}}></MovieInfomation>
        </div>
      </div>
    </div>
  );
}
