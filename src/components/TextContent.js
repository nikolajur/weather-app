import { useContext } from "react";
import LocationContext from "../store/location-context";
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

      {showIsLoading && <p className="content__text">Waiting for data...</p>}

      {showMoreResults && (
        <>
          <p className="content__text">I found more than 1 result.</p>
          <p className="content__text">Please select the searched location on the map.</p>
        </>
      )}

      {showPositionError && <p>{ctx.error.position}</p>}

      {showWeatherInfo && <WeatherGraphics />}

      {showWeatherError && (
        <p className="content__text">
          I can't get the weather info at the moment, please try it later.
        </p>
      )}
    </div>
  );
};

export default Content;
