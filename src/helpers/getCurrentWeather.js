import axios from "axios";

export const getCurrentWeather = async (lat, lng) => {
  console.log("get weather");
  const key = process.env.REACT_APP_API_KEY;
  console.log(key);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;

  const currentWeather = async () => {
    try {
      const response = await axios.get(url);
      /*   console.log(response.data.name);
      console.log(response.data.weather[0].main);
      console.log(response.data.main); */

      return response.data.weather[0].main;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const data = currentWeather();
  console.log(data);
  return data;
};
