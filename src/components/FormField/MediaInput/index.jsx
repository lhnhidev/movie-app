export default function MediaInput(field) {
  return (
    <div>
      <div className="flex items-center">
        <input
          id="movie"
          className="mr-1"
          type="radio"
          value="movie"
          name={field.name}
          checked={field.value === "movie"}
          onChange={field.onChange}
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
          name={field.name}
          checked={field.value === "tv"}
          onChange={field.onChange}
        ></input>
        <label htmlFor="tv">Tv Show</label>
        <br />
      </div>
    </div>
  );
}
