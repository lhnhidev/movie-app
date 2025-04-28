import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between overflow-hidden bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4">
        <img src="./netflix.png" alt="logo-netflix" className="w-16 sm:w-28" />
        <a href="#">Phim</a>
        <a href="#">Truyền hình</a>
      </div>

      <div className="cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </div>
    </header>
  );
}
