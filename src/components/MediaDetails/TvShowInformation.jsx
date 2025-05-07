export default function MovieInfomation({
  original_title,
  production_countries = [],
  status,
  networks = [],
}) {
  return (
    <>
      <p className="mb-3 text-[18px] font-bold">Information</p>
      <div>
        <div className="mb-3 font-medium">
          <p className="mb-1">Original Name</p>
          <p>{original_title}</p>
        </div>

        <div className="mb-3 font-medium">
          <p className="mb-1">Original Country</p>
          <div className="flex flex-wrap">
            {(production_countries || []).map((code) => (
              <img
                key={code.iso_3166_1}
                src={`https://flagcdn.com/24x18/${code.iso_3166_1.toLowerCase()}.png`}
                alt={`flag_${code.iso_3166_1}`}
                className="mr-1"
              ></img>
            ))}
          </div>
        </div>

        <div className="mb-3 font-medium">
          <p className="mb-1">Status</p>
          <p>{status}</p>
        </div>

        <div className="mb-3 font-medium">
          <p className="mb-1">Network</p>
          <div className="grid grid-cols-4 gap-1">
            {networks.map((network) => (
              <img
                className="invert"
                key={network.id}
                src={`https://image.tmdb.org/t/p/original${network.logo_path}`}
                alt={network.name}
              ></img>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
