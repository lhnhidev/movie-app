import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

export default function FeatureMovies() {
  return (
    <div className="relative">
      <img
        src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXpZK1dH4xjS8hOYDY1gC-wyRSPKnqI9bYpbYVOSEvzdsQCO12axtwvwJ2qdl9qJY2RRptRpVUpGWfS38d_qbNDTir1e-BDWVKCJ.jpg?r=9c0"
        alt="page"
        className="aspect-video w-[100vw] brightness-50"
      />
      <Movie></Movie>
      <PaginateIndicator></PaginateIndicator>
    </div>
  );
}
