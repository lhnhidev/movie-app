import { useForm } from "react-hook-form";
import FormField from "./FormField";
import GenresInput from "./FormField/GenresInput";
import MediaInput from "./FormField/MediaInput";
import RatingInput from "./FormField/RatingInput";
import { useEffect } from "react";

export default function SearchForm({ searchFormValues, setSearchFormValues }) {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: searchFormValues,
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    setSearchFormValues(watch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(watch())]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
