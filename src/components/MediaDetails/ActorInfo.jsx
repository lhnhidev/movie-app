import ImageComponent from "@components/ImageComponent";
import { Link } from "react-router-dom";

export default function ActorInfo({
  id,
  name,
  profilePath,
  character,
  episode,
}) {
  return (
    <Link to={`/people/${id}`} className="rounded-md border border-gray-500">
      <div>
        <ImageComponent
          className="w-full rounded-t-md"
          src={
            profilePath
              ? `https://image.tmdb.org/t/p/original${profilePath}`
              : "/actor_no_image.svg"
          }
          alt={`img_${name}`}
        ></ImageComponent>
        <div className="px-3 py-2">
          <p className="mb-1 text-[18px] font-bold">{name}</p>
          <p className="text-basic mb-1 text-[14px]">{character}</p>
          <p className="text-basic text-[14px]">
            {episode && (episode + ` Episode${episode > 1 ? "s" : ""}`)}
          </p>
        </div>
      </div>
    </Link>
  );
}
