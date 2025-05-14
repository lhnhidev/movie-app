export default function MediaInput({ name, value, onChange }) {
  return (
    <div>
      <div className="flex items-center">
        <input
          id="movie"
          className="mr-1"
          type="radio"
          value="movie"
          name={name}
          checked={value === "movie"}
          onChange={onChange}
        ></input>
        <label htmlFor="movie">Movie</label>
        <br />
      </div>
      <div className="flex items-center">
        <input
          id="tv"
          className="mr-1"
          type="radio"
          value="tv"
          name={name}
          checked={value === "tv"}
          onChange={onChange}
        ></input>
        <label htmlFor="tv">Tv Show</label>
        <br />
      </div>
    </div>
  );
}
