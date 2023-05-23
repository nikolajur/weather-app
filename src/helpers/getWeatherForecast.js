import axios from "axios";

export const getWeatherForecast = async (lat, lng) => {
  console.log("get weather forecast");
  const url = `https://api.open-meteo.com/v1/forecst?latitude=${lat}&longitude=${lng}&timezone=auto&daily=temperature_2m_max&daily=temperature_2m_min&daily=precipitation_sum&daily=weathercode`;

  // console.log(lat, lng);
  const weatherForecast = async () => {
    console.log("get city function");
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      let forecast = [];
      for (let i = 0; i < 7; i++) {
        forecast.push({
          time: response.data.daily.time[i],
          temperatureMax: response.data.daily.temperature_2m_max[i],
          temperatureMin: response.data.daily.temperature_2m_min[i],
          precipitation: response.data.daily.precipitation_sum[i],
          code: response.data.daily.weathercode[i]
        });
      }
      // console.log(forecast);
      return forecast;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const data = weatherForecast();
  return data;
};
