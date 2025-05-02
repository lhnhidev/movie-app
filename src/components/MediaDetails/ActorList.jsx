import { useState } from "react";
import ActorInfo from "./ActorInfo";

export default function ActorList({ actors }) {
  const [isShowMore, setIsShowMore] = useState(true);

  const arrayActors = isShowMore ? (actors || []).slice(0, 4) : actors;

  return (
    <div className="bg-slate-950 px-8 py-5 text-white">
      <div className="flex gap-6 mx-auto max-w-5xl">
        <div className="flex-[2]">
          <p className="mb-3 text-[18px] font-bold">Actor</p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {(arrayActors || []).map((actor) => (
              <ActorInfo
                key={actor.id}
                name={actor.original_name}
                profilePath={actor.profile_path}
                character={actor.character}
              ></ActorInfo>
            ))}
          </div>

          <p className="mt-4 inline-block cursor-pointer px-2 py-1" onClick={() => setIsShowMore(!isShowMore)}>
            {isShowMore ? 'Show More' : 'Show Less'}
          </p>
        </div>
        <div className="flex-1">
          <p className="mb-3 text-[18px] font-bold">Information</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}
