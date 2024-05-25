// Contexts
import { useContext } from "react";
import { LocationContext } from "../../../contexts/location.context";

// Map Dependencies
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Styles
import "../styles/map.styles.scss"

const MapComponent = () => {
  const { location, locationCoords } = useContext(LocationContext);

  return (
    <div className="map-component-container">
      <div className="leaflet-container">
      <MapContainer center={locationCoords} zoom={8} animate={false} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy;
          <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
        <Marker position={locationCoords}>
          <Popup>Current Location: {location}</Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
  );
};

export default MapComponent;
