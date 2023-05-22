import axios from "axios";

export const getWeatherForecast = async (lat, lng) => {
  console.log("get weather forecast");
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&timezone=auto&daily=temperature_2m_max&daily=temperature_2m_min&daily=precipitation_sum&daily=weathercode`;

  // console.log(lat, lng);
  const weatherForecast = async () => {
    console.log("get city function");
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const data = weatherForecast();
  return data;
};
