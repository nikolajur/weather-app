import React from "react";
// import sun from "../assets/weather-icons/01d.svg";

const ForcastWeatherIcon = ({ code }) => {
  let weatherIconSrc;
  console.log(code);
  switch (code) {
    case 0:
      weatherIconSrc = "sun.png";
      break;

    case "02d":
      weatherIconSrc = "partly-cloudy-day.png";
      break;

    case "03d":
      weatherIconSrc = "clouds.png";
      break;
    case "04d":
      weatherIconSrc = "cloud.png";
      break;
    case "09d":
      weatherIconSrc = "rain.png";
      break;
    case "10d":
      weatherIconSrc = "rainy-weather.png";
      break;
    case "11d":
      weatherIconSrc = "storm.png";
      break;
    case "13d":
      weatherIconSrc = "snow.png";
      break;
    case "50d":
      weatherIconSrc = "fog-day.png";
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

export default ForcastWeatherIcon;
