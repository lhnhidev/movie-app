import Header from "../components/Header";
import FeatureMovies from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TABS_RATED, TABS_TRENDING } from "../libs/constants";

function HomePage() {
  return (
    <>
      <Header></Header>
      <div className="aspect-video mt-14 bg-slate-950">
        <FeatureMovies></FeatureMovies>
      </div>
      <MediaList title="Trending" tabs={TABS_TRENDING} ></MediaList>
      <MediaList title="Rated" tabs={TABS_RATED} ></MediaList>
    </>
  );
}

export default HomePage;
