import React, { useContext, useState } from "react";
import LocationContext from "../store/location-context";
import { getWeatherForecast } from "../helpers/getWeatherForecast";
import { motion, AnimatePresence } from "framer-motion";
import { currentWeatherVariants, forecastVariants } from "../helpers/animation-variants";
import CurrentWeather from "./CurrentWeather";
import WeatherForcastItem from "./WeatherForcastItem";

const WeatherGraphics = () => {
  console.log("render weather graphics");
  const ctx = useContext(LocationContext);

  const [weatherForecast, setWeatherForecast] = useState({ data: null, error: null });
  const [showCurrentWeather, setShowCurrentWeather] = useState(true);
  console.log(weatherForecast);

  const onNextBtnHandler = async () => {
    try {
      const weatherForecast = await getWeatherForecast(
        ctx.coordinates[0].lat,
        ctx.coordinates[0].lng
      );

      if (weatherForecast) {
        console.log(weatherForecast);
        setWeatherForecast({ data: weatherForecast, error: null });
        setShowCurrentWeather(false);
      }
    } catch (error) {
      console.log(error);
      setWeatherForecast({
        data: null,
        error: "I can't get the data at the moment, please try it later."
      });
      setShowCurrentWeather(false);
    }
  };

  const onBackBtnHandler = () => {
    setShowCurrentWeather(true);
  };

  return (
    <div className="weather">
      <AnimatePresence mode="wait">
        {showCurrentWeather && (
          <motion.div
            className="weather__current"
            key="current"
            variants={currentWeatherVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CurrentWeather />
            <div className="weather__next">
              <p className="weather__next-text">next</p>
              <p className="weather__next-text">7 days</p>

              <button className="weather__next-btn" onClick={onNextBtnHandler}>
                <img
                  className="weather__next-icon"
                  src="https://img.icons8.com/ios-filled/50/023047/more-than.png"
                  alt="next-7-days"
                />
              </button>
            </div>
          </motion.div>
        )}
        <motion.div
          className="weather__forecast"
          key="forecast"
          variants={forecastVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {!showCurrentWeather && (
            <div className="weather__back">
              <p className="weather__back-text">current</p>
              <p className="weather__back-text">weather</p>
              <button className="weather__back-btn" onClick={onBackBtnHandler}>
                <img
                  className="weather__back-icon"
                  src="https://img.icons8.com/ios-filled/50/023047/less-than.png"
                  alt="show-current-weather"
                />
              </button>
            </div>
          )}

          {weatherForecast.data && !showCurrentWeather && (
            <div className="weather__forecast-data">
              {weatherForecast.data.map((day, i) => {
                return (
                  <WeatherForcastItem
                    key={i}
                    time={day.time}
                    temperatureMax={day.temperatureMax}
                    temperatureMin={day.temperatureMin}
                    precipitation={day.precipitation}
                    code={day.code}
                  />
                );
              })}
            </div>
          )}

          {weatherForecast.error && !showCurrentWeather && (
            <div className="weather__forecast-error">
              <p className="content__text">{weatherForecast.error}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WeatherGraphics;
