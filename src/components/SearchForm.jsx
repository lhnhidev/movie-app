import { useForm } from "react-hook-form";
import FormField from "./FormField";
import GenresInput from "./FormField/GenresInput";
import MediaInput from "./FormField/MediaInput";
import RatingInput from "./FormField/RatingInput";
import { useEffect } from "react";

export default function SearchForm({ searchFormValues, setSearchFormValues }) {
  const { control, watch } = useForm({
    defaultValues: searchFormValues,
  });

  useEffect(() => {
    setSearchFormValues(watch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(watch())]);

  return (
    <form className="space-y-3">
      <FormField
        label="Media Type"
        name="mediaType"
        control={control}
        Component={MediaInput}
      ></FormField>

      <FormField
        label="Genres"
        name="genres"
        control={control}
        Component={GenresInput}
      ></FormField>

      <FormField
        label="Rating"
        name="rating"
        control={control}
        Component={RatingInput}
      ></FormField>

      {/* <input value="Submit" type="submit"></input> */}
    </form>
  );
}
