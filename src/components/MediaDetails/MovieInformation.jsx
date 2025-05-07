import { formatCurrency } from "@libs/utils";

export default function MovieInformation({
  original_title,
  production_countries = [],
  status,
  budget,
  revenue,
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
          <p className="mb-1">Budget</p>
          <p>{formatCurrency(budget)}</p>
        </div>

        <div className="mb-3 font-medium">
          <p className="mb-1">Revenue</p>
          <p>{formatCurrency(revenue)}</p>
        </div>
      </div>
    </>
  );
}
