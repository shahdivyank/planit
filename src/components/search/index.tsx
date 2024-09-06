import Header from "./header";
import Map from "./map";
import Nearby from "./nearby";
import Trips from "./trips";

const Search = () => {
  return (
    <div className="flex">
      <div>
        <Header />
        <Trips />
        <Nearby />
      </div>
      <Map />
    </div>
  );
};

export default Search;
