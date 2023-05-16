import React from "react";

const LocationContext = React.createContext({
  coordinates: null,
  isFromDevice: false,
  weather: null,
  isLoading: { position: null, weather: null },
  error: { position: null, weather: null },
  getCoordinates: () => {},
  fetchWeatherAPI: () => {}
});

export default LocationContext;
