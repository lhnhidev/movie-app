import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/ImageComponent";
import { useState } from "react";

export default function SeasonList({ allSeasons = [] }) {
  const [isShowMore, setIsShowMore] = useState(
    allSeasons.length > 3 ? "true" : undefined,
  );

  const seasons = isShowMore
    ? allSeasons.reverse().slice(0, 3)
    : allSeasons.reverse();

  return (
    <div>
      <p className="mb-3 mt-4 text-[18px] font-bold">Season</p>
      <div>
        <div>
          {seasons.map((season) => (
            <div
              key={season.id}
              className="mb-4 flex rounded-md border border-gray-400 p-3"
            >
              <div className="w-[calc(200px)]">
                <ImageComponent
                  src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                  alt={`backdrop_${season.name}`}
                  className={"rounded-lg"}
                ></ImageComponent>
              </div>
              <div className="ml-4 flex-1 space-y-2">
                <p className="text-[18px] font-bold">Season {season.name}</p>
                <div className="flex items-center gap-3">
                  <p>Rating</p>
                  <CircularProgressBar
                    percent={season?.vote_average.toFixed(1) * 10 || 0}
                    size={35}
                    strokeWidth={3}
                    strokeColor={
                      season?.vote_average >= 7
                        ? "green"
                        : season?.vote_average >= 5
                          ? "orange"
                          : "red"
                    }
                  ></CircularProgressBar>
                </div>

                <p>Release Data: {season.air_date}</p>
                <p>
                  {season.episode_count} Episode
                  {season.episode_count > 1 ? "s" : ""}
                </p>
                <p>{season.overview}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {isShowMore === undefined ? (
            ""
          ) : (
            <p
              className="inline-block cursor-pointer px-2 py-1"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              {isShowMore ? "Show More" : "Show Less"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
