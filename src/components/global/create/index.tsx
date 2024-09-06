import Date from "./date";
import Description from "./description";
import Photos from "./photos";
import Preferences from "./preferences";
import Sidebar from "./sidebar";
import Title from "./title";

const Create = () => {
  return (
    <div>
      <Title />
      <div className="flex">
        <div>
          <Date />
          <Photos />
          <Preferences />
          <Description />
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default Create;
