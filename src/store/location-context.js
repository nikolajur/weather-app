import React from "react";

const LocationContext = React.createContext({
  coordinates: {
    lat: null,
    lng: null
  },
  isFromDevice: false,
  weather: null,
  updateLocation: () => {},
  fetchWeatherAPI: () => {}
});

export default LocationContext;