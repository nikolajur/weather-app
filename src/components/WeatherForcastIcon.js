import React from "react";
// import sun from "../assets/weather-icons/01d.svg";

const WeatherForcastIcon = ({ code }) => {
  let weatherIconSrc;
  console.log(code);
  switch (code) {
    case 0:
    case 1:
      weatherIconSrc = "sun.png";
      break;
    case 2:
      weatherIconSrc = "partly-cloudy-day.png";
      break;

    /*  case "03d":
      weatherIconSrc = "clouds.png";
      break; */
    case 3:
      weatherIconSrc = "cloud.png";
      break;
    case 45:
    case 48:
      weatherIconSrc = "fog-day.png";
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      weatherIconSrc = "rain.png";
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      weatherIconSrc = "rainy-weather.png";
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      weatherIconSrc = "snow.png";
      break;
    case 95:
    case 96:
    case 99:
      weatherIconSrc = "storm.png";
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

export default WeatherForcastIcon;
