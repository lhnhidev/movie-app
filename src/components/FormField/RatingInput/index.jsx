export default function RatingInput({ onChange, control, name }) {
  return (
    <div>
      <select
        name={name}
        control={control}
        onChange={onChange}
        className="rounded border text-black"
      >
        <option>All</option>
        <option value="0-49">0 - 49</option>
        <option value="50-79">50 - 79</option>
        <option value="80-100">80 - 100</option>
      </select>
    </div>
  );
}
