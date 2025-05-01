import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUrlDetailsMovie, OPTIONS_GET } from "../libs/constants";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  const handleRenderCrews = (type) => {
    return (movieInfo.credits?.crew || [])
      ?.filter((member) => member.department === type)
      .map((member) => member.name)
      .join(", ");
  };

  const certification =
    (
      (movieInfo?.release_dates?.results || []).find(
        (movie) => movie.iso_3166_1 === "US",
      )?.release_dates || []
    ).find((item) => item.certification != "")?.certification || "G";

  useEffect(() => {
    fetch(getUrlDetailsMovie(id), OPTIONS_GET)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieInfo(data);
      })
      .catch((error) => {
        alert("Không tìm thấy dữ liệu phim");
        return new Error(error);
      });
  }, [id]);

  return (
    <div className="relative mt-14 overflow-hidden text-white lg:mt-20">
      <img
        src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
        alt={`backdrop_${movieInfo.title}`}
        className="absolute inset-0 w-full brightness-[.2]"
      ></img>

      <div className="relative mx-auto flex max-w-5xl gap-6 px-5 py-8">
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}
            alt={`img_${movieInfo.title}`}
          ></img>
        </div>

        <div className="flex-[2]">
          <p className="mb-2 text-base font-bold min-[480px]:text-lg md:text-xl lg:text-2xl">
            {movieInfo.title}
          </p>
          <div className="flex items-center gap-5 text-[12px]">
            <span className="border border-gray-400 p-1">{certification}</span>
            <p>{movieInfo.release_date}</p>
            <p>
              {(movieInfo.genres || [])?.map((item) => item.name).join(", ")}
            </p>
          </div>

          <div className="mt-3 flex gap-6">
            <div className="flex items-center gap-1">
              <CircularProgressBar
                percent={
                  movieInfo.vote_average?.toFixed(1)
                    ? movieInfo.vote_average?.toFixed(1) * 10
                    : ""
                }
                size={35}
                strokeWidth={3}
                strokeColor={
                  movieInfo.vote_average >= 7
                    ? "green"
                    : movieInfo.vote_average >= 5
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
            <p className="text-[12px] sm:text-base">{movieInfo.overview}</p>
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
