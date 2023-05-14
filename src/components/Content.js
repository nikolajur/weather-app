import { useContext } from "react";
import LocationContext from "../store/location-context";
import WeatherGraphics from "./WeatherGraphics";

const Content = () => {
  const ctx = useContext(LocationContext);

  return (
    <div className="content">
      {/*  <p>{ctx.isLoading.position === null ? "null" : "není null"}</p>
      <p>{ctx.isLoading.weather === null ? "null" : "není null"}</p>
      <p>{ctx.coordinates === null ? "null" : "není null"}</p> */}
      {!ctx.isLoading.position && !ctx.isLoading.weather && !ctx.coordinates && <p>Něco na úvod</p>}
      {(ctx.isLoading.position || ctx.isLoading.weather) && (
        <p className="loading">Waiting for data...</p>
      )}

      {!ctx.isLoading.position && !ctx.isLoading.weather && ctx.coordinates && ctx.weather && (
        <WeatherGraphics />
      )}
    </div>
  );
};

export default Content;
