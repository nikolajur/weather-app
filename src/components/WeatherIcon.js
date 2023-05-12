import React from "react";
// import sun from "../assets/weather-icons/01d.svg";

const WeatherIcon = ({ icon }) => {
  let weatherIconSrc;
  let weatherIconAlt;
  console.log(icon);
  switch (icon) {
    case "01d":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/sun.png";
      weatherIconAlt = "sun";
      break;
    case "01n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/bright-moon.png";
      weatherIconAlt = "bright-moon";
      break;
    case "02d":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/partly-cloudy-day.png";
      weatherIconAlt = "partly-cloudy-day";
      break;
    case "02n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/partly-cloudy-night.png";
      weatherIconAlt = "partly-cloudy-night";
      break;
    case "03d":
    case "03n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/clouds.png";
      weatherIconAlt = "clouds";
      break;
    case "04d":
    case "04n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/cloud.png";
      weatherIconAlt = "cloud";
      break;
    case "09d":
    case "09n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/rain.png";
      weatherIconAlt = "rain";
      break;
    case "10d":
    case "10n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/umbrella.png";
      weatherIconAlt = "umbrella";
      break;
    case "11d":
    case "11n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/storm.png";
      weatherIconAlt = "storm";
      break;
    case "13d":
    case "13n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/snow.png";
      weatherIconAlt = "snow";
      break;
    case "50d":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/fog-day.png";
      weatherIconAlt = "fog-day";
      break;
    case "50n":
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/fog-night.png";
      weatherIconAlt = "fog-night";
      break;

    default:
      weatherIconSrc = "https://img.icons8.com/sf-regular/48/000000/thermometer.png";
      weatherIconAlt = "weather-icon";
  }
  return (
    <img src={weatherIconSrc} alt={weatherIconAlt} style={{ width: "48px", height: "48px" }} />
  );
};

export default WeatherIcon;
