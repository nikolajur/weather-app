import React, { useContext } from "react";
import LocationContext from "../store/location-context";
import WeatherIcon from "./WeatherIcon";

const WeatherGraphics = () => {
  const ctx = useContext(LocationContext);
  console.log("render weather graphics");
  const isRaining =
    ctx.weather?.rain; /* && ["09d", "09n", "10d", "10n"].includes(ctx.weather.weather[0].icon) */

  console.log(ctx.weather.wind.deg);
  let windDirection;
  if (ctx.weather.wind.deg >= 337 || ctx.weather.wind.deg < 22) {
    windDirection = "long-arrow-down";
  } else if (ctx.weather.wind.deg >= 22 && ctx.weather.wind.deg < 67) {
    windDirection = "down-left-arrow";
  } else if (ctx.weather.wind.deg >= 67 && ctx.weather.wind.deg < 112) {
    windDirection = "long-arrow-left";
  } else if (ctx.weather.wind.deg >= 112 && ctx.weather.wind.deg < 157) {
    windDirection = "up-left-arrow";
  } else if (ctx.weather.wind.deg >= 157 && ctx.weather.wind.deg < 202) {
    windDirection = "long-arrow-up";
  } else if (ctx.weather.wind.deg >= 202 && ctx.weather.wind.deg < 247) {
    windDirection = "up-right-arrow";
  } else if (ctx.weather.wind.deg >= 247 && ctx.weather.wind.deg < 292) {
    windDirection = "long-arrow-right.";
  } else if (ctx.weather.wind.deg >= 292 && ctx.weather.wind.deg < 337) {
    windDirection = "down-right-arrow";
  }

  console.log(windDirection);

  console.log("rain: " + isRaining);
  // console.log(ctx.weather);
  return (
    <div className="weather">
      <div className="weather__now">
        <div className="weather__location">
          <h1 className="weather__location-name">{ctx.weather.name}</h1>
          <p className="weather__location-timestamp">
            at&nbsp;{new Date(ctx.weather.dt * 1000).toLocaleTimeString()}
          </p>
        </div>
        <div className="weather__description">
          <h2 className="weather__description-text">{ctx.weather.weather[0].description}</h2>
          <WeatherIcon icon={ctx.weather.weather[0].icon} />
          {isRaining && (
            <p className="weather__property">
              <span className="weather__property-value">
                {Math.round(ctx.weather.rain["1h"])}mm/h
              </span>
            </p>
          )}
        </div>
        <p className="weather__temeprature">{Math.round(ctx.weather.main.temp)}°C</p>
        <p className="weather__property">
          feels like:
          <span className="weather__property-value">
            &nbsp;&nbsp;{Math.round(ctx.weather.main.feels_like)}°C
          </span>
        </p>
        <p className="weather__property">
          humidity:
          <span className="weather__property-value">
            &nbsp;&nbsp;{Math.round(ctx.weather.main.humidity)}&nbsp;%
          </span>
        </p>
        <div className="weather__wind">
          <p className="weather__property">
            wind:
            <span className="weather__property-value">
              &nbsp;&nbsp;{Math.round(ctx.weather.wind.speed)}&nbsp;km/h
            </span>
          </p>

          <img
            className="weather__wind-arrow"
            width="19"
            height="19"
            src={`https://img.icons8.com/ios-filled/50/ffffff/${windDirection}.png`}
            alt={windDirection}
          />
        </div>
      </div>
      <div className="weather_next">
        <p className="weather__next-text">next</p>
        <p className="weather__next-text">7 days</p>

        <button
          className="weather__next-btn"
          onClick={() => {
            console.log("show next 7 clicked");
          }}
        >
          <img
            className="weather__next-icon"
            src="https://img.icons8.com/ios-filled/50/ffffff/more-than.png"
            alt="next-7-days"
          />
        </button>
      </div>
    </div>
  );
};

export default WeatherGraphics;
