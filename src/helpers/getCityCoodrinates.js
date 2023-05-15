import axios from "axios";

export const getCityCoordinates = async (cityName) => {
  console.log("get weather");
  const key = process.env.REACT_APP_API_KEY;

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${key}`;

  const cityCoordinates = async () => {
    console.log("get city function");
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const data = cityCoordinates();
  return data;
};
