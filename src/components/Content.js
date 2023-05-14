import { useContext } from "react";
import LocationContext from "../store/location-context";
import WeatherGraphics from "./WeatherGraphics";

const Content = () => {
  const ctx = useContext(LocationContext);

  return (
    <div className="content">
      {(ctx.isLoading.position || ctx.isLoading.weather) && (
        <p className="loading">Waiting for data...</p>
      )}

      {ctx.weather && <WeatherGraphics />}
    </div>
  );
};

export default Content;
