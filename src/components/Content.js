import { useContext } from "react";
import LocationContext from "../store/location-context";
import Instructions from "./Instructions";
import WeatherGraphics from "./WeatherGraphics";

const Content = () => {
  const ctx = useContext(LocationContext);

  return (
    <div className="content">
      {!ctx.isLoading.position && !ctx.isLoading.weather && !ctx.coordinates && <Instructions />}

      {(ctx.isLoading.position || ctx.isLoading.weather) && (
        <p className="loading">Waiting for data...</p>
      )}

      {!ctx.isLoading.position &&
        !ctx.isLoading.weather &&
        ctx.coordinates?.length > 1 &&
        !ctx.weather && (
          <>
            <p>More than 1 result was found.</p>
            <p>Please select the searched location on the map.</p>
          </>
        )}

      {!ctx.isLoading.position && !ctx.isLoading.weather && ctx.coordinates && ctx.weather && (
        <WeatherGraphics />
      )}
    </div>
  );
};

export default Content;
