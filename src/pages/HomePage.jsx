import FeatureMovies from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TABS_RATED, TABS_TRENDING } from "../libs/constants";

function HomePage() {
  return (
    <>
      <div className="mt-14 aspect-video bg-slate-950 lg:mt-20">
        <FeatureMovies></FeatureMovies>
      </div>
      <MediaList
        title="Trending"
        tabs={TABS_TRENDING}
        type="trending"
      ></MediaList>
      <MediaList title="Rated" tabs={TABS_RATED} type="rated"></MediaList>
    </>
  );
}

export default HomePage;
