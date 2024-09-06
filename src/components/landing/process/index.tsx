import Arrow from "./arrow";
import Description from "./description";
import Discover from "./discover";
import Go from "./go";
import Plan from "./plan";
import Tile from "./tile";

const Process = () => {
  return (
    <div>
      <Tile />
      <Tile />
      <Tile />

      <Arrow />
      <Description />
      <Arrow />

      <Discover />
      <Plan />
      <Go />
    </div>
  );
};

export default Process;
