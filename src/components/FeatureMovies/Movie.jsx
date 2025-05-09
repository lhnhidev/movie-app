import ImageComponent from "@components/ImageComponent";
import useModalContext from "@context/useModalContext";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movie({ movie, trailerVideoKey }) {
  const { setIsShowing, setContent } = useModalContext();

  return (
    <>
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt="page"
        className="aspect-video w-[100vw] brightness-50"
        aspect=""
      ></ImageComponent>
      <div className="absolute bottom-[30px] px-8 text-white lg:bottom-[15%] xl:bottom-[25%]">
        <p className="mb-2 text-[16px] font-bold min-[480px]:text-[20px] md:text-[24px]">
          {movie?.original_title}
        </p>
        <div className="text-[12px] min-[480px]:text-[14px]">
          <p className="mb-2 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="mb-6">{movie?.release_date}</p>
        </div>

        <div>
          <div className="hidden md:block md:w-[65%] min-[850px]:w-1/2">
            <p className="mb-3 text-[18px] font-bold">Overview</p>
            <p className="mb-5">{movie?.overview}</p>
          </div>
        </div>
        <div className="flex gap-1 text-[12px] min-[480px]:text-[14px] md:gap-2">
          <button
            className="rounded bg-gray-200 px-2 py-1 text-black md:px-5 md:py-3"
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
            <FontAwesomeIcon icon={faPlay} className="mr-1"></FontAwesomeIcon>
            Trailer
          </button>
          <button className="rounded border border-gray-200 px-2 py-1 md:px-5 md:py-3">
            Thông tin
          </button>
        </div>
      </div>
    </>
  );
}
