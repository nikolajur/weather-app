import React from "react";
// import sun from "../assets/weather-icons/01d.svg";

const CurrentWeatherIcon = ({ code }) => {
  let weatherIconSrc;
  console.log(code);
  switch (code) {
    case "01d":
      weatherIconSrc = "sun.png";
      break;
    case "01n":
      weatherIconSrc = "bright-moon.png";
      break;
    case "02d":
      weatherIconSrc = "partly-cloudy-day.png";
      break;
    case "02n":
      weatherIconSrc = "partly-cloudy-night.png";
      break;
    case "03d":
    case "03n":
      weatherIconSrc = "clouds.png";
      break;
    case "04d":
    case "04n":
      weatherIconSrc = "cloud.png";
      break;
    case "09d":
    case "09n":
      weatherIconSrc = "rain.png";
      break;
    case "10d":
    case "10n":
      weatherIconSrc = "rainy-weather.png";
      break;
    case "11d":
    case "11n":
      weatherIconSrc = "storm.png";
      break;
    case "13d":
    case "13n":
      weatherIconSrc = "snow.png";
      break;
    case "50d":
      weatherIconSrc = "fog-day.png";
      break;
    case "50n":
      weatherIconSrc = "fog-night.png";
      break;
    default:
      weatherIconSrc = "thermometer.png";
      break;
  }

  return (
    <img
      className="weather__description-icon"
      src={`https://img.icons8.com/sf-regular/48/ffffff/${weatherIconSrc}`}
      alt="weather-icon"
      /*  style={{ width: "48px", height: "48px" }} */
    />
  );
};

export default CurrentWeatherIcon;
