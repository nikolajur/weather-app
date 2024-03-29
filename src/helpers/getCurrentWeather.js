import axios from "axios";

export const getCurrentWeather = async (lat, lng) => {
  console.log("get weather");
  const key = process.env.REACT_APP_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;

  const currentWeather = async () => {
    try {
      const response = await axios.get(url);

      // return response.data.weather[0].main;
      return response.data;
      // console.log(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const data = currentWeather();
  return data;
};
