import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../CircularProgressBar.jsx";

export default function Banner({ mediaInfo }) {
  const handleRenderCrews = (type) => {
    return (mediaInfo.credits?.crew || [])
      ?.filter((member) => member.department === type)
      .map((member) => member.name)
      .join(", ");
  };

  const certification =
    (
      (mediaInfo?.release_dates?.results || []).find(
        (movie) => movie.iso_3166_1 === "US",
      )?.release_dates || []
    ).find((item) => item.certification != "")?.certification || "G";

  return (
    <div className="relative mt-14 overflow-hidden text-white lg:mt-20">
      <img
        src={`https://image.tmdb.org/t/p/original${mediaInfo.backdrop_path}`}
        alt={`backdrop_${mediaInfo.title}`}
        className="absolute inset-0 w-full brightness-[.2]"
      ></img>

      <div className="relative mx-auto flex max-w-5xl gap-6 px-5 py-8">
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/original${mediaInfo.poster_path}`}
            alt={`img_${mediaInfo.title}`}
          ></img>
        </div>

        <div className="flex-[2]">
          <p className="mb-2 text-base font-bold min-[480px]:text-lg md:text-xl lg:text-2xl">
            {mediaInfo.title}
          </p>
          <div className="flex items-center gap-5 text-[12px]">
            <span className="border border-gray-400 p-1">{certification}</span>
            <p>{mediaInfo.release_date}</p>
            <p>
              {(mediaInfo.genres || [])?.map((item) => item.name).join(", ")}
            </p>
          </div>

          <div className="mt-3 flex gap-6">
            <div className="flex items-center gap-1">
              <CircularProgressBar
                percent={
                  mediaInfo.vote_average?.toFixed(1)
                    ? mediaInfo.vote_average?.toFixed(1) * 10
                    : ""
                }
                size={35}
                strokeWidth={3}
                strokeColor={
                  mediaInfo.vote_average >= 7
                    ? "green"
                    : mediaInfo.vote_average >= 5
                      ? "orange"
                      : "red"
                }
              ></CircularProgressBar>
              Rating
            </div>
            <button className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
              Trailer
            </button>
          </div>

          <div className="mt-3">
            <p className="mb-2 text-base font-bold min-[480px]:text-lg md:text-xl lg:text-2xl">
              Overview
            </p>
            <p className="text-[12px] sm:text-base">{mediaInfo.overview}</p>
          </div>

          <div className="mt-6 flex gap-8">
            <div className="w-2/4">
              <p className="font-bold">Director</p>
              <p className="text-[12px] sm:text-base">
                {handleRenderCrews("Directing")}
              </p>
            </div>

            <div className="w-2/4">
              <p className="font-bold">Writer</p>
              <p className="text-[12px] sm:text-base">
                {handleRenderCrews("Writing")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
