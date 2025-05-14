import FormField from "@components/FormField";
import GenresInput from "@components/FormField/GenresInput";
import MediaInput from "@components/FormField/MediaInput";
import { useForm } from "react-hook-form";

export default function SearchPage() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(JSON.stringify(data));

  return (
    <div className="mt-14 bg-slate-950 p-8 text-white lg:mt-20">
      <div className="container flex-col">
        <p className="mb-3 text-2xl font-bold">Search</p>
        <div className="flex">
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                label="Media Type"
                Component={MediaInput}
                name="mediaType"
                control={control}
              ></FormField>

              <FormField
                label="Genres"
                name="genres"
                control={control}
                Component={GenresInput}
              ></FormField>

              <input value="Submit" type="submit"></input>
            </form>
          </div>

          <div className="flex-[3]">
            <p>Result</p>
          </div>
        </div>
      </div>
    </div>
  );
}
