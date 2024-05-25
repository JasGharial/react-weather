// Contexts
import { useContext } from "react";
import { LocationContext } from "../../../contexts/location.context";

// Layouts and Components
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import MapComponent from "../../map/components/map.component";
import Forecast from "../../forecast/components/forecast.component";

const Home = () => {
  const { location, locationCoords } = useContext(LocationContext);
  return (
    <>
    This is Home Component. These are registered co-ordinates {locationCoords.join(", ")} and city {location}.
    <DashboardLayout>
      <Forecast />
      <MapComponent />
    </DashboardLayout>
    </>
  );
};

export default Home;
