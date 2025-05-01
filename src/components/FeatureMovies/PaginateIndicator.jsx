export default function PaginateIndicator({
  movies,
  activeMovieId,
  setActiveMovieId,
}) {
  return (
    <div className="absolute bottom-[30px] right-8 lg:bottom-[15%] xl:bottom-[25%]">
      <ul className="hidden gap-1 min-[480px]:flex">
        {movies.map((movie) => {
          return (
            <li
              className={`h-1 w-6 cursor-pointer ${activeMovieId === movie.id ? "bg-stone-50" : "bg-gray-500"}`}
              onClick={() => setActiveMovieId(movie.id)}
              key={movie.id}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
