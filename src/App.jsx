import Header from "./components/Header";
import FeatureMovies from "./components/FeatureMovies";

function App() {
  return (
    <>
      <Header></Header>
      <div className="aspect-video">
        <FeatureMovies></FeatureMovies>
      </div>
    </>
  );
}

export default App;
