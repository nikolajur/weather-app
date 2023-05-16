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
      {!ctx.isLoading.position && !ctx.isLoading.weather && !ctx.coordinates && (
        <div className="content__instructions">
          <p>Type a location</p>
          <p>OR</p>
          <p>
            Use your device position (press the&nbsp;
            <span>
              <img
                className="search-position-btn__icon"
                src="https://img.icons8.com/ios-filled/50/center-direction.png"
                alt="location-icon"
              />
            </span>
            &nbsp;button)
          </p>
          <p>OR</p>
          <p>Select from the list of your previous locations</p>
        </div>
      )}
      {(ctx.isLoading.position || ctx.isLoading.weather) && (
        <p className="loading">Waiting for data...</p>
      )}
      {!ctx.isLoading.position &&
        !ctx.isLoading.weather &&
        ctx.coordinates?.length > 1 &&
        !ctx.weather && (
          <>
            <p>More than 1 result found.</p>
            <p>Please select searched location on the map.</p>
          </>
        )}

      {!ctx.isLoading.position && !ctx.isLoading.weather && ctx.coordinates && ctx.weather && (
        <WeatherGraphics />
      )}
    </div>
  );
};

export default Content;
