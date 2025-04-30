import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { OPTIONS_GET } from "../../libs/constants";

export default function MediaList({ title, tabs }) {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;
    if (url != undefined) {
      fetch(url, OPTIONS_GET)
        .then((res) => res.json())
        .then((json) => {
          setMediaList(json.results);
        })
        .catch((err) => console.error(err));
    }
  }, [activeTabId, tabs]);

  return (
    <div className="bg-slate-950 px-8 py-8 text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="mr-4 text-[16px] font-bold min-[480px]:mr-10 min-[480px]:text-[20px] min-[768px]:text-[24px]">
          {title}
        </p>
        <ul className="flex items-center justify-center gap-2 rounded border border-white text-[12px] min-[480px]:text-[14px] min-[768px]:text-[16px]">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                className={`cursor-pointer rounded px-1 py-1 min-[480px]:px-2 ${tab.id == activeTabId ? "bg-white text-black" : ""}`}
                onClick={() => {
                  setActiveTabId(tab.id);
                }}
              >
                {tab.label}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((movie) => {
          return (
            <MovieCard
              key={movie?.id}
              poster={movie?.poster_path}
              title={movie?.title || movie?.name}
              point={movie?.vote_average}
              date={movie?.release_date || movie?.first_air_date}
              mediaType={movie?.media_type || activeTabId}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
