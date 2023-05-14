import React, { useState, useEffect, useCallback } from "react";
import LocationContext from "./location-context";
import { getCurrentWeather } from "../helpers/getCurrentWeather";

const DEFAULT_LOCATION_STATE = {
  coordinates: null,
  isFromDevice: null,
  weather: null,
  isLoading: null,
  error: null,
  getCoordinatates: () => {},
  fetchWeather: () => {}
};

const LocationProvider = ({ children }) => {
  console.log("render location provider");
  const [locationInfo, setLocationInfo] = useState(DEFAULT_LOCATION_STATE);
  const [positionIsLoading, setPositionIsLoading] = useState(null);
  const [weatherIsLoading, setWeatherIsLoading] = useState(null);
  const [positionError, setPositionError] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

  /* console.log("ctx coordinates");
  console.log(locationInfo.coordinates);
  console.log("ctx weather");
  console.log(locationInfo.weather); */

  // weather data
  const fetchWeatherAPI = useCallback(async (lat, lng) => {
    setWeatherIsLoading(true);
    try {
      console.log("called get weather from ctx");
      // console.log(lat, lng);
      const data = await getCurrentWeather(lat, lng);

      if (data) {
        console.log("context response");
        console.log(data);
        setLocationInfo((prev) => ({ ...prev, weather: data, isFromDevice: true }));
        setWeatherIsLoading(false);
        setWeatherError(false);
      }
    } catch (error) {
      console.log(error);
      setWeatherIsLoading(false);
      setWeatherError(true);
    }
  }, []);

  // update location info state
  const updateLocation = (coordinates, fromGPS) => {
    //({lat: lat, lng: lng}, true/false)
    console.log("update location in ctx");
    setLocationInfo((prev) => ({ ...prev, coordinates: coordinates, isFromDevice: fromGPS }));
  };

  // get coordinates from device
  const getCoordinatates = useCallback(() => {
    setPositionIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        updateLocation({ lat: position.coords.latitude, lng: position.coords.longitude }, true);
        setPositionIsLoading(false);
        setPositionError(false);
      },
      (error) => {
        console.log(error);
        setLocationInfo((prev) => ({ ...prev, isFromDevice: false, coordinates: null }));
        setPositionIsLoading(false);
        setPositionError(true);
      },
      { timeout: 30000, maximumAge: 0 }
    );
  }, []);

  // po inicializaci se zeptá na polohu
  /*  useEffect(() => {
    console.log("ctx use effect navigator");
    getCoordinatates();
  }, [getCoordinatates]); */

  // když se změní poloha, fetch weather
  useEffect(() => {
    if (locationInfo.coordinates) {
      console.log("ctx use effect fetch weather");
      fetchWeatherAPI(locationInfo.coordinates.lat, locationInfo.coordinates.lng);
    }
  }, [locationInfo.coordinates, fetchWeatherAPI]);

  return (
    <LocationContext.Provider
      value={{
        coordinates: locationInfo.coordinates,
        isFromDevice: locationInfo.isFromDevice,
        weather: locationInfo.weather,
        isLoading: { position: positionIsLoading, weather: weatherIsLoading },
        error: { position: positionError, weather: weatherError },
        getCoordinates: getCoordinatates,
        fetchWeatherAPI: fetchWeatherAPI
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
