import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
import ImageComponent from "./ImageComponent";

export default function MovieCard({
  id,
  poster,
  title,
  point,
  date,
  mediaType,
}) {
  return (
    <Link
      to={mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`}
      className="rounded-lg border border-slate-800"
    >
      <div className="relative">
        {mediaType === "tv" && (
          <p className="absolute right-2 top-2 rounded bg-slate-800/80 p-1 text-lg text-white shadow-sm">
            Tv show
          </p>
        )}
        <ImageComponent
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt={`poster_${title}`}
          className="w-full rounded-t-lg"
        ></ImageComponent>
        <div className="relative top-[-20px] px-3 min-[768px]:px-6">
          <div className="mb-4">
            <CircularProgressBar
              size={40}
              strokeWidth={3}
              percent={point.toFixed(1) * 10}
              strokeColor={point >= 7 ? "green" : point >= 5 ? "orange" : "red"}
            ></CircularProgressBar>
          </div>
          <p className="mt-2 text-[14px] font-bold min-[480px]:text-[16px]">
            {title}
          </p>
          <p className="text-[12px] text-slate-500">{date}</p>
        </div>
      </div>
    </Link>
  );
}
