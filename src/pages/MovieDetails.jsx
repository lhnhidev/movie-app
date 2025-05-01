import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";

export default function MovieDetails() {
  return (
    <div className="relative overflow-hidden text-white">
      <img
        src="https://image.tmdb.org/t/p/original/ddIkmH3TpR6XSc47jj0BrGK5Rbz.jpg"
        alt="backdrop_img"
        className="absolute inset-0 brightness-[.2]"
      ></img>

      <div className="relative mx-auto flex max-w-5xl gap-6 px-5 py-8">
        <div className="flex-1">
          <img
            src="https://image.tmdb.org/t/p/original/vnfgoohSwKNOcRfJOPULXTvX0cu.jpg"
            alt="image"
            className=""
          ></img>
        </div>

        <div className="flex-[2]">
          <p className="mb-2 text-base font-bold min-[480px]:text-lg md:text-xl lg:text-2xl">
            Title name of film
          </p>
          <div className="flex items-center gap-5 text-[12px]">
            <span className="border border-gray-400 p-1">G</span>
            <p>2025-11-11</p>
            <p>Fantasy, Adventure, Family, Comedy</p>
          </div>

          <div className="mt-3 flex gap-6" >
            <div className="flex items-center gap-1">
              <CircularProgressBar
                percent={90}
                size={35}
                strokeWidth={3}
                strokeColor="green"
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
            <p className="text-[12px] sm:text-base">
              $After the G20 Summit is overtaken by terrorists, President
              Danielle Sutton must bring all her statecraft and military
              experience to defend her family and her fellow leaders.
            </p>
          </div>

          <div className="mt-6 flex justify-between">
            <div>
              <p className="font-bold">Director</p>
              <p className="text-[12px] sm:text-base">Jenniter Phang</p>
            </div>

            <div>
              <p className="font-bold">Writer</p>
              <p className="text-[12px] sm:text-base">
                Dan Frey, Russell Sommer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
