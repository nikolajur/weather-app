import React, { useState, useEffect, useCallback } from "react";
import LocationContext from "./location-context";
import { getCurrentWeather } from "../helpers/getCurrentWeather";
import { getCityCoordinates } from "../helpers/getCityCoodrinates";

const DEFAULT_LOCATION_STATE = {
  coordinates: null,
  isFromDevice: null,
  weather: null,
  isLoading: { position: null, weather: null },
  error: { position: null, weather: null },
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

  const onPositionFound = (position, fromGPS) => {
    //updateLocation({ lat: position.coords.latitude, lng: position.coords.longitude }, true);
    setLocationInfo((prev) => ({
      ...prev,
      coordinates: position,
      /*  { lat: position.coords.latitude, lng: position.coords.longitude }, */
      isFromDevice: fromGPS
    }));
    setPositionIsLoading(false);
    setPositionError(false);
  };
  const onPositionError = (error) => {
    console.log(error);
    setLocationInfo((prev) => ({ ...prev, isFromDevice: false, coordinates: null }));
    setPositionIsLoading(false);
    setPositionError(true);
  };

  // get coordinates from device
  const getCoordinatates = useCallback(async (method, searchedText = null) => {
    setPositionIsLoading(true);
    if (method === "device") {
      console.log("method device");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log([{ lat: position.coords.latitude, lng: position.coords.longitude }]);
          onPositionFound(
            [{ lat: position.coords.latitude, lng: position.coords.longitude }],
            true
          );
        },
        (error) => {
          onPositionError(error);
        },
        { timeout: 30000, maximumAge: 0 }
      );
    }
    if (method === "search") {
      console.log("ahoj ze search");
      if (searchedText) {
        console.log(searchedText);
        try {
          const data = await getCityCoordinates(searchedText);
          console.log(data.length);
          if (data.length === 1) {
            onPositionFound({ lat: data[0].lat, lng: data[0].lon }, false);
          }
          if (data.length > 1) {
            const coordinatesArray = data.map((city) => {
              return { /*  name: city.name,  */ lat: city.lat, lng: city.lon };
            });
            console.log(coordinatesArray);
            onPositionFound(coordinatesArray, false);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("napis jmeno");
        setPositionIsLoading(false);
      }
      //funkce
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    console.log(locationInfo);
  }, [locationInfo]);

  // když se změní poloha, fetch weather
  /* useEffect(() => {
    if (locationInfo.coordinates) {
      console.log("ctx use effect fetch weather");
      fetchWeatherAPI(locationInfo.coordinates.lat, locationInfo.coordinates.lng);
    }
  }, [locationInfo.coordinates, fetchWeatherAPI]); */

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
