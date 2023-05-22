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
  getCoordinatates: () => {} /* ,
  fetchWeather: () => {} */
};

const LocationProvider = ({ children }) => {
  console.log("render location provider");
  const [locationInfo, setLocationInfo] = useState(DEFAULT_LOCATION_STATE);
  const [positionIsLoading, setPositionIsLoading] = useState(null);
  const [weatherIsLoading, setWeatherIsLoading] = useState(null);
  const [positionError, setPositionError] = useState(null);
  const [weatherError, setWeatherError] = useState(null);

  // weather data
  const fetchCurrentWeatherAPI = useCallback(async (lat, lng) => {
    setWeatherIsLoading(true);
    try {
      console.log("called get weather from ctx");
      const data = await getCurrentWeather(lat, lng);

      if (data) {
        console.log("context response");
        console.log(data);
        setLocationInfo((prev) => ({
          ...prev,
          weather: data,
          isFromDevice: true
        }));
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
    //setLocationInfo((prev) => ({ ...prev, isFromDevice: null, coordinates: null })); - už nastaveno nazačátku
    setPositionIsLoading(false);
    setPositionError(error);
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
              /*  null, */
              true
            );
            fetchCurrentWeatherAPI(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            onPositionError("I can't get the device position.");
          },
          { timeout: 30000, maximumAge: 0 }
        );
      } else if (method === "search") {
        if (searchedText) {
          console.log(searchedText);
          try {
            const data = await getCityCoordinates(searchedText);
            // console.log(data.length);
            console.log(data);
            if (data.length === 1) {
              console.log("array length 1");
              // onPositionFound([{ lat: data[0].lat, lng: data[0].lon }], false);
              onPositionFound([{ lat: data[0].latitude, lng: data[0].longitude }], false);

              // fetchCurrentWeatherAPI(data[0].lat, data[0].lon);
              fetchCurrentWeatherAPI(data[0].latitude, data[0].longitude);
            }
            if (data.length > 1) {
              console.log("array length > 1");
              const coordinatesArray = data.map((city) => {
                // return { name: city.name, country: city.country, lat: city.lat, lng: city.lon };
                return {
                  name: city.name,
                  country: city.country_code,
                  lat: city.latitude,
                  lng: city.longitude
                };
              });
              console.log(coordinatesArray);
              onPositionFound(coordinatesArray, false);
            }
          } catch (error) {
            console.log(error);
            /* if (error.response.status === 404 || error.response.status === 408) {
              onPositionError("I can't connect to the location provider at the moment.");
            } else {
            } */
            onPositionError("I can't find a location with this name.");
            // poslat zprávu na page
          }
        } else {
          console.log("napis jmeno");
          onPositionError("Please enter a valid location name");
        }
        //funkce ?
      } else if (method === "select") {
        console.log("selecting location");
        onPositionFound([{ lat: coordinates[0], lng: coordinates[1] }], false);
        console.log(coordinates[0], coordinates[1]);
        fetchCurrentWeatherAPI(coordinates[0], coordinates[1]);
      } else {
        return;
      }
    },
    [fetchCurrentWeatherAPI, onPositionFound, onPositionError]
  );

  useEffect(() => {
    console.log(locationInfo);
    console.log(weatherError);
  }, [locationInfo, weatherError]);

  return (
    <LocationContext.Provider
      value={{
        coordinates: locationInfo.coordinates,
        isFromDevice: locationInfo.isFromDevice,
        weather: locationInfo.weather,
        isLoading: { position: positionIsLoading, weather: weatherIsLoading },
        error: { position: positionError, weather: weatherError },
        getCoordinates: getCoordinatates /* ,
        fetchCurrentWeatherAPI: fetchCurrentWeatherAPI */
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
