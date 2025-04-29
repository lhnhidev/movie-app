import MovieCard from "./MovieCard";

export default function MediaList() {
  return (
    <div className="bg-slate-950 px-8 py-8 text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="mr-4 text-[16px] font-bold min-[480px]:mr-10 min-[480px]:text-[20px] min-[768px]:text-[24px]">
          Trending
        </p>
        <ul className="flex items-center justify-center gap-2 rounded border border-white text-[12px] min-[480px]:text-[14px] min-[768px]:text-[16px]">
          <li className="cursor-pointer rounded bg-white px-1 py-1 text-black min-[480px]:px-2">
            All
          </li>
          <li className="cursor-pointer rounded px-1 py-1 min-[480px]:px-2">
            Movie
          </li>
          <li className="cursor-pointer rounded px-1 py-1 min-[480px]:px-2">
            TV Show
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </div>
  );
}
