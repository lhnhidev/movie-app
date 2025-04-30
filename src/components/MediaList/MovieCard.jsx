import CircularProgressBar from "./CircularProgressBar";

export default function MovieCard({ poster, title, point, date, mediaType }) {
  return (
    <div className="relative rounded-lg border border-slate-800">
      {mediaType === "tv" && (
        <p className="absolute right-2 top-2 rounded bg-slate-800/80 p-1 text-lg text-white shadow-sm">
          Tv show
        </p>
      )}
      <img
        className="rounded-t-lg"
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={`poster_${title}`}
      ></img>
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
          ${title}
        </p>
        <p className="text-[12px] text-slate-500">${date}</p>
      </div>
    </div>
  );
}
