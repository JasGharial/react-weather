import { createContext, useReducer } from "react";

export const LocationContext = createContext({
  location: "",
  setLocation: () => {},
  locationCoords: [],
  setLocationCoords: () => {},
  setLocationLatLongs: () => {}
});

const LOCATION_ACTION_TYPES = {
  SET_LOCATION: "SET_LOCATION",
  SET_LAT_LONG: "SET_LAT_LONG",
};

const INTIAL_STATE = {
  location: "Lisbon",
  locationCoords: [38.72, 9.13]
};

const locationReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOCATION_ACTION_TYPES.SET_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case LOCATION_ACTION_TYPES.SET_LAT_LONG:
      return {
        ...state,
        locationCoords: payload,
      };
    default:
      throw new Error(`Unhandeled type of ${type} in Location Reducer`);
  }
};

export const LocationProvider = ({ children }) => {
  const [{ location, locationCoords }, dispatch] = useReducer(
    locationReducer,
    INTIAL_STATE
  );

  const setLocation = (location) => {
    dispatch({ type: LOCATION_ACTION_TYPES.SET_LOCATION, payload: location });
  };

  const setLocationCoords = (lat_long) => {
    const coordsArray = [lat_long.latitude, lat_long.longitude];
    dispatch({ type: LOCATION_ACTION_TYPES.SET_LAT_LONG, payload: coordsArray });
  };

  const setLocationLatLongs = (fetched_location) => {
    const location = fetched_location.location;
    setLocation(location);
    const lat_long = {latitude: fetched_location.latitude, longitude: fetched_location.longitude};
    setLocationCoords(lat_long);
  }

  const value = { location, setLocation, locationCoords, setLocationCoords, setLocationLatLongs };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
