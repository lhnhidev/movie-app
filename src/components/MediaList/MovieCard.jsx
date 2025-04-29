export default function MovieCard() {
  // https://image.tmdb.org/t/p/original/O7REXWPANWXvX2jhQydHjAq2DV.jpg
  return (
    <div className="rounded-lg border border-slate-800">
      <img
        className="rounded-t-lg"
        src="https://image.tmdb.org/t/p/original/xUkUZ8eOnrOnnJAfusZUqKYZiDu.jpg"
        alt="poster_movie"
      ></img>
      <div className="px-3 py-1 min-[768px]:px-6 min-[768px]:py-3">
        <p>69</p>
        <p className="font-bold mt-2 text-[14px] min-[480px]:text-[16px]">A Working Man</p>
        <p className="text-slate-500 text-[12px]">2025-03-26</p>
      </div>
    </div>
  );
}
