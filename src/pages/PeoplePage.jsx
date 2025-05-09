import ImageComponent from "@components/ImageComponent";
import RelatedMediaList from "@components/MediaDetails/RelatedMediaList";
import { useLoaderData } from "react-router-dom";

export default function PeoplePage() {
  const person = useLoaderData();

  return (
    <div className="mt-14 bg-slate-950 p-8 text-white lg:mt-20">
      <div className="container">
        <div className="flex-1">
          <div className="mb-5 w-72">
            <ImageComponent
              src={`https://image.tmdb.org/t/p/original${person?.profile_path}`}
            ></ImageComponent>
          </div>

          <div className="space-y-3">
            <p className="text-xl font-bold">Person Info</p>
            <div>
              <p className="text-lg font-bold">Known For</p>
              <p>{person?.known_for_department}</p>
            </div>

            <div>
              <p className="text-lg font-bold">Gender</p>
              <p>{person?.gender === 1 ? "Female" : "Male"}</p>
            </div>

            <div>
              <p className="text-lg font-bold">Place of Birth</p>
              <p>{person?.place_of_birth}</p>
            </div>

            <div>
              <p className="text-lg font-bold">Birthday</p>
              <p>{person?.birthday}</p>
            </div>
          </div>
        </div>

        <div className="flex-[2] space-y-3">
          <p className="text-2xl font-bold">{person?.name}</p>
          <div>
            <p className="mb-1 text-lg font-bold">Biography</p>
            <p className="text-justify whitespace-pre-line">{person?.biography}</p>
          </div>
          <RelatedMediaList
            type="actor"
            title="Know for"
            id={person?.id}
          ></RelatedMediaList>
        </div>

      </div>
    </div>
  );
}
