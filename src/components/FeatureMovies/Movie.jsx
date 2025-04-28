import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movie() {
  return (
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
            despite his physical weakness, confronts school violence using his
            sharp intellect and strategic mind. As he faces escalating
            challenges, Si-eun forms unexpected alliances with peers, leading to
            intense confrontations and uncovering hidden truths within the
            school.
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
  );
}
