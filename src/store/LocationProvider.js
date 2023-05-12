import React, { useState, useEffect } from "react";
import LocationContext from "./location-context";
import { getCurrentWeather } from "../helpers/getCurrentWeather";

const DEFAULT_LOCATION_STATE = {
  coordinates: {
    lat: null,
    lng: null
  },
  isFromDevice: false,
  weather: null,
  updateLocation: () => {},
  fetchWeather: () => {}
};

const LocationProvider = ({ children }) => {
  console.log("render location provider");
  const [currentLocation, setCurrentLocation] = useState(DEFAULT_LOCATION_STATE);
  /* const [weather, setWeather] = useState(null); */
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  console.log("ctx coordinates");
  console.log(currentLocation.coordinates);
  console.log("ctx weather");
  console.log(currentLocation.weather);
  // weather data
  const fetchWeatherAPI = async (lat, lng) => {
    setIsLoading(true);
    setError(false);
    try {
      console.log("called get weather from ctx");
      // console.log(lat, lng);
      const data = await getCurrentWeather(lat, lng);

      if (data) {
        console.log("context response");
        console.log(data);
        setCurrentLocation((prev) => ({ ...prev, weather: data }));
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  // location
  const updateLocation = (coordinates, fromGPS) => {
    //({lat: lat, lng: lng}, true/false)
    console.log("update location in ctx");
    setCurrentLocation((prev) => ({ ...prev, coordinates: coordinates, isFromDevice: fromGPS }));
    // fetchWeatherAPI(coordinates.lat, coordinates.lng);
  };

  // po inicializaci se zeptá na polohu
  useEffect(() => {
    console.log("ctx use effect navigator");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        updateLocation({ lat: position.coords.latitude, lng: position.coords.longitude }, true);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  // když se změní poloha, fetch weather
  useEffect(() => {
    if (currentLocation.coordinates.lat) {
      console.log("ctx use effect fetch weather");
      fetchWeatherAPI(currentLocation.coordinates.lat, currentLocation.coordinates.lng);
    }
  }, [currentLocation.coordinates]);

  return (
    <LocationContext.Provider
      value={{
        coordinates: currentLocation.coordinates,
        isFromDevice: currentLocation.isFromDevice,
        weather: currentLocation.weather,
        updateLocation: updateLocation,
        fetchWeatherAPI: fetchWeatherAPI
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
