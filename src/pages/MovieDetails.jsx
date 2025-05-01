import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getUrlCreditsMovie,
  getUrlDetailsMovie,
  OPTIONS_GET,
} from "../libs/constants";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [prodution, setProdution] = useState({});

  const handleRenderCrews = (type) => {
    return prodution.crew?.filter((member) => {
      const { department, original_name, id } = member;
      if (department === type) return {id, original_name};
    }).map((member, index, arr) => {
      if (index === arr.length - 1) {
        return <span key={member.id}>{member.original_name}</span>
      }
      return <span key={member.id}>{member.original_name}, </span>
    })
  }

  useEffect(() => {
    fetch(getUrlDetailsMovie(id), OPTIONS_GET)
      .then((response) => response.json())
      .then((data) => {
        setMovieInfo(data);
      });

    fetch(getUrlCreditsMovie(id), OPTIONS_GET)
      .then((response) => response.json())
      .then((data) => {
        setProdution(data);
      });
  }, [id]);

  return (
    <div className="relative overflow-hidden text-white">
      <img
        src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
        alt={`backdrop_${movieInfo.title}`}
        className="absolute inset-0 brightness-[.2]"
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
            <span className="border border-gray-400 p-1">G</span>
            <p>{movieInfo.release_date}</p>
            <p>
              {movieInfo.genres?.map((item, index) => {
                if (index === movieInfo.genres.length - 1) {
                  return <span key={item.id}>{item.name}</span>;
                }
                return <span key={item.id}>{item.name}, </span>;
              })}
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
