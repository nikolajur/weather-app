import { useContext } from "react";
import LocationContext from "../store/location-context";
import { motion } from "framer-motion";
import { textVariants } from "../helpers/animation-variants";
import Instructions from "./Instructions";
import WeatherGraphics from "./WeatherGraphics";

const Content = () => {
  const ctx = useContext(LocationContext);
  const showInstructions =
    !ctx.isLoading.position &&
    !ctx.isLoading.weather &&
    !ctx.error.position &&
    !ctx.error.weather &&
    !ctx.coordinates;
  console.log("show instructiones: " + showInstructions);
  const showIsLoading = ctx.isLoading.position || ctx.isLoading.weather;
  console.log("show loading: " + showIsLoading);
  const showMoreResults =
    !ctx.isLoading.position &&
    !ctx.isLoading.weather &&
    ctx.coordinates?.length > 1 &&
    !ctx.weather;
  console.log("show more: " + showMoreResults);
  const showPositionError = !ctx.isLoading.position && !ctx.isLoading.weather && ctx.error.position;
  console.log("show pos error: " + showPositionError);
  const showWeatherInfo =
    !ctx.isLoading.position && !ctx.isLoading.weather && ctx.coordinates && ctx.weather;
  console.log("show weather: " + showWeatherInfo);
  const showWeatherError =
    !ctx.isLoading.position &&
    !ctx.isLoading.weather &&
    /*  ctx.coordinates?.length === 1 && */
    !ctx.weather &&
    ctx.error.weather;
  console.log("show weather error: " + showWeatherError);

  return (
    <div className="content">
      {showInstructions && <Instructions />}

      {showIsLoading && (
        <motion.p
          className="content__text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Waiting for data...
        </motion.p>
      )}

      {showMoreResults && (
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <p className="content__text">I found more than 1 result.</p>
          <p className="content__text">Please select the searched location on the map.</p>
        </motion.div>
      )}

      {showPositionError && (
        <motion.p variants={textVariants} initial="hidden" animate="visible">
          {ctx.error.position}
        </motion.p>
      )}

      {showWeatherInfo && <WeatherGraphics />}

      {showWeatherError && (
        <motion.p
          className="content__text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          I can't get the data at the moment, please try it later.
        </motion.p>
      )}
    </div>
  );
};

export default Content;
