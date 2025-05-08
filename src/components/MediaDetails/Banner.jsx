import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "@components/ImageComponent.jsx";
import CircularProgressBar from "@components/CircularProgressBar";
import { useContext } from "react";
import { ModalContext } from "@context/ModalContext";

export default function Banner({
  backdrop_path,
  title,
  poster_path,
  release_date,
  genres,
  vote_average,
  overview,
  certification,
  crew,
  trailerVideoKey,
}) {
  const handleRenderCrews = (type) => {
    return (crew || [])
      ?.filter((member) => member.department === type)
      .map((member) => member.name)
      .join(", ");
  };

  const { setIsShowing, setContent } = useContext(ModalContext);

  return (
    <div className="relative mt-14 overflow-hidden bg-slate-950 text-white shadow-sm shadow-slate-800 lg:mt-20">
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={`backdrop_${title}`}
        className="absolute inset-0 w-full brightness-[.2]"
        aspect=""
      ></ImageComponent>

      <div className="relative mx-auto flex max-w-5xl gap-6 px-5 py-8">
        <div className="flex-1">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={`img_${title}`}
          ></ImageComponent>
        </div>

        <div className="flex-[2]">
          <p className="mb-2 text-base font-bold min-[480px]:text-lg md:text-xl lg:text-2xl">
            {title}
          </p>
          <div className="flex items-center gap-5 text-[12px]">
            <span className="border border-gray-400 p-1">{certification}</span>
            <p>{release_date}</p>
            <p>{(genres || [])?.map((item) => item.name).join(", ")}</p>
          </div>

          <div className="mt-3 flex gap-6">
            <div className="flex items-center gap-1">
              <CircularProgressBar
                percent={
                  vote_average?.toFixed(1) ? vote_average?.toFixed(1) * 10 : ""
                }
                size={35}
                strokeWidth={3}
                strokeColor={
                  vote_average >= 7
                    ? "green"
                    : vote_average >= 5
                      ? "orange"
                      : "red"
                }
              ></CircularProgressBar>
              Rating
            </div>
            <button
              className="flex items-center gap-1"
              onClick={() => {
                setIsShowing(true);
                setContent(
                  <iframe
                    className="aspect-video w-1/2 min-w-[450px]"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                  ></iframe>,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
              Trailer
            </button>
          </div>

          <div className="mt-3">
            <p className="mb-2 text-base font-bold min-[480px]:text-lg md:text-xl lg:text-2xl">
              Overview
            </p>
            <p className="text-[12px] sm:text-base">{overview}</p>
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
