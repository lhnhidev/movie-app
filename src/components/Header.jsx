import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-14 items-center justify-between overflow-hidden bg-slate-950 px-8 text-white shadow-md shadow-gray-950 lg:h-20">
      <div className="flex items-center gap-4 lg:gap-7">
        <Link to="/">
          <img src="/netflix.png" alt="logo-netflix" className="w-16 sm:w-28" />
        </Link>
        <a href="#">Phim</a>
        <a href="#">Truyền hình</a>
      </div>

      <div className="cursor-pointer">
        <Link to="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </Link>
      </div>
    </header>
  );
}
