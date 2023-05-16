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
  selectLocationFromMany: () => {},
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

  const onPositionFound = useCallback((position, fromGPS) => {
    //updateLocation({ lat: position.coords.latitude, lng: position.coords.longitude }, true);
    setLocationInfo((prev) => ({
      ...prev,
      coordinates: position, // array
      /*  { lat: position.coords.latitude, lng: position.coords.longitude }, */
      isFromDevice: fromGPS
    }));
    setPositionIsLoading(false);
    setPositionError(false);
  }, []);

  const onPositionError = useCallback((error) => {
    console.log(error);
    setLocationInfo((prev) => ({ ...prev, isFromDevice: false, coordinates: null }));
    setPositionIsLoading(false);
    setPositionError(true);
  }, []);

  // get coordinates from device
  const getCoordinatates = useCallback(
    async (method, searchedText = null, coordinates = null) => {
      setPositionIsLoading(true);
      setLocationInfo((prev) => ({
        ...prev,
        isFromDevice: null,
        coordinates: null,
        weather: null
      }));
      if (method === "device") {
        console.log("method device");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log([{ lat: position.coords.latitude, lng: position.coords.longitude }]);
            onPositionFound(
              [{ lat: position.coords.latitude, lng: position.coords.longitude }],
              true
            );
            fetchWeatherAPI(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            onPositionError(error);
          },
          { timeout: 30000, maximumAge: 0 }
        );
      } else if (method === "search") {
        console.log("ahoj ze search");
        if (searchedText) {
          console.log(searchedText);
          try {
            const data = await getCityCoordinates(searchedText);
            console.log(data.length);
            if (data.length === 1) {
              console.log("array length 1");
              onPositionFound([{ lat: data[0].lat, lng: data[0].lon }], false);
              fetchWeatherAPI(data[0].lat, data[0].lon);
            }
            if (data.length > 1) {
              console.log("array length > 1");
              const coordinatesArray = data.map((city) => {
                return { name: city.name, country: city.country, lat: city.lat, lng: city.lon };
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
      } else if (method === "select") {
        console.log("selecting location");
        onPositionFound([{ lat: coordinates[0], lng: coordinates[1] }], false);
        console.log(coordinates[0], coordinates[1]);
        fetchWeatherAPI(coordinates[0], coordinates[1]);
      } else {
        return;
      }
    },
    [fetchWeatherAPI, onPositionFound, onPositionError]
  );

  const selectLocationFromMany = useCallback(
    (lat, lng) => {
      setPositionIsLoading(true);
      setLocationInfo((prev) => ({
        ...prev,
        coordinates: [{ lat: lat, lng: lng }]
      }));
      fetchWeatherAPI(lat, lng);
    },
    [fetchWeatherAPI]
  );

  useEffect(() => {
    console.log(locationInfo);
  }, [locationInfo]);

  return (
    <LocationContext.Provider
      value={{
        coordinates: locationInfo.coordinates,
        isFromDevice: locationInfo.isFromDevice,
        weather: locationInfo.weather,
        isLoading: { position: positionIsLoading, weather: weatherIsLoading },
        error: { position: positionError, weather: weatherError },
        getCoordinates: getCoordinatates,
        selectLocationFromMany: selectLocationFromMany,
        fetchWeatherAPI: fetchWeatherAPI
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
