import Header from "./components/Header";
import FeatureMovies from "./components/FeatureMovies";
import MediaList from "./components/MediaList";

function App() {
  return (
    <>
      <Header></Header>
      <div className="aspect-video mt-14 bg-slate-950">
        <FeatureMovies></FeatureMovies>
      </div>
      <MediaList></MediaList>
    </>
  );
}

export default App;
