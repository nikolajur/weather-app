import axios from "axios";

export const getCityCoordinates = async (cityName) => {
  console.log("get weather");
  // const key = process.env.REACT_APP_API_KEY;

  // const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${key}`;
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`;

  const cityCoordinates = async () => {
    console.log("get city function");
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      return response.data.results;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const data = cityCoordinates();
  return data;
};
