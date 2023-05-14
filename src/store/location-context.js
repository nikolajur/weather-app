import React from "react";

const LocationContext = React.createContext({
  coordinates: null,
  isFromDevice: false,
  weather: null,
  isLoading: null,
  error: null,
  getCoordinates: () => {},
  fetchWeatherAPI: () => {}
});

export default LocationContext;
