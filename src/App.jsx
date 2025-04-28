import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <header className="flex h-14 items-center justify-between overflow-hidden bg-slate-950 px-8 text-white">
        <div className="flex items-center gap-4">
          <img
            src="./netflix.png"
            alt="logo-netflix"
            className="w-16 sm:w-28"
          />
          <a href="#">Phim</a>
          <a href="#">Truyền hình</a>
        </div>

        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </header>

      <div className="relative">
        <img
          src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXpZK1dH4xjS8hOYDY1gC-wyRSPKnqI9bYpbYVOSEvzdsQCO12axtwvwJ2qdl9qJY2RRptRpVUpGWfS38d_qbNDTir1e-BDWVKCJ.jpg?r=9c0"
          alt="page"
          className="aspect-video w-[100vw] brightness-50"
        />
        <div className="absolute bottom-[30px] px-8 text-white lg:bottom-[15%] xl:bottom-[25%]">
          <p className="mb-2 text-[16px] font-bold min-[480px]:text-[20px] md:text-[24px]">
            Weak Hero Class
          </p>
          <div className="text-[12px] min-[480px]:text-[14px]">
            <p className="mb-2 inline-block border border-gray-400 p-1 text-gray-400">
              PG13
            </p>
            <p className="mb-6">2024-06-11</p>
          </div>

          <div>
            <div className="hidden md:block md:w-[65%] min-[850px]:w-1/2">
              <p className="mb-3 text-[18px] font-bold">Overview</p>
              <p className="mb-5">
                "Weak Hero Class 1" is a South Korean action-drama series that
                delves into the life of Yeon Si-eun, a brilliant student who,
                despite his physical weakness, confronts school violence using
                his sharp intellect and strategic mind. As he faces escalating
                challenges, Si-eun forms unexpected alliances with peers,
                leading to intense confrontations and uncovering hidden truths
                within the school.
              </p>
            </div>
          </div>
          <div className="flex gap-1 text-[12px] min-[480px]:text-[14px] md:gap-2">
            <button className="rounded bg-gray-200 px-2 py-1 text-black md:px-5 md:py-3">
              <FontAwesomeIcon icon={faPlay} className="mr-1"></FontAwesomeIcon>
              Trailer
            </button>
            <button className="rounded border border-gray-200 px-2 py-1 md:px-5 md:py-3">
              Thông tin
            </button>
          </div>
        </div>

        <div className="absolute bottom-[30px] right-8 lg:bottom-[15%] xl:bottom-[25%]">
          <ul className="hidden gap-1 min-[480px]:flex">
            <li className="h-1 w-6 bg-stone-50"></li>
            <li className="h-1 w-6 bg-gray-500"></li>
            <li className="h-1 w-6 bg-gray-500"></li>
            <li className="h-1 w-6 bg-gray-500"></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
