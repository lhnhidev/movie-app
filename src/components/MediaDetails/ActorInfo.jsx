export default function ActorInfo({ name, profilePath, character }) {
  return (
    <div className="rounded-md border border-gray-500">
      <img
        className="rounded-t-md"
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/original${profilePath}`
            : "/actor_no_image.svg"
        }
        alt={`img_${name}`}
      ></img>
      <div className="px-3 py-2">
        <p className="text-[18px] font-bold">{name}</p>
        <p className="text-basic">{character}</p>
        <p className="text-basic">18</p>
      </div>
    </div>
  );
}
