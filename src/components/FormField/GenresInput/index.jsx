import useFetch from "@hooks/useFetch";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";

export default function GenresInput({ control, value = [], onChange }) {
  const mediaType = useWatch({ name: "mediaType", control });
  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enable: mediaType },
  );

  useEffect(() => {
    onChange([]);
  }, [mediaType, onChange]);

  console.log(value);

  return (
    <div className="flex flex-wrap gap-1 text-[14px]">
      {(data?.genres || []).map((genre) => {
        return (
          <p
            key={genre.id}
            className={`cursor-pointer rounded px-2 ${value.includes(genre.id) ? "bg-[#E50914] text-white" : "border-gray-500 bg-gray-300 text-black"}`}
            onClick={() => {
              let newValue = [...value];
              if (value.includes(genre.id)) {
                newValue = newValue.filter((item) => item != genre.id);
              } else {
                newValue.push(genre.id);
              }
              onChange(newValue);
            }}
          >
            {genre.name}
          </p>
        );
      })}
    </div>
  );
}
