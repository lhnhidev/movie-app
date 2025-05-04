import { formatCurrency } from "@libs/utils";

export default function MovieInfomation({ movieInfo }) {
  return (
    <>
      <p className="mb-3 text-[18px] font-bold">Information</p>
      <div>
        <div className="mb-3 font-medium">
          <p className="mb-1">Original Name</p>
          <p>{movieInfo.original_title}</p>
        </div>

        <div className="mb-3 font-medium">
          <p className="mb-1">Original Country</p>
          <div className="flex flex-wrap">  
            {(movieInfo.origin_country || []).map((code) => (
              <img
                key={code}
                src={`https://flagcdn.com/24x18/${code.toLowerCase()}.png`}
                alt={`flag_${code}`}
                className="mr-1"
              ></img>
            ))}
          </div>
        </div>

        <div className="mb-3 font-medium">
          <p className="mb-1">Status</p>
          <p>{movieInfo.status}</p>
        </div>

        <div className="mb-3 font-medium">
          <p className="mb-1">Budget</p>
          <p>{formatCurrency(movieInfo.budget)}</p>
        </div>

        <div className="mb-3 font-medium">
          <p className="mb-1">Revenue</p>
          <p>{formatCurrency(movieInfo.revenue)}</p>
        </div>
      </div>
    </>
  );
}
