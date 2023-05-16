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
      {!ctx.isLoading.position &&
        !ctx.isLoading.weather &&
        ctx.coordinates?.length > 1 &&
        !ctx.weather && (
          <>
            <p>More than 1 result found.</p>
            <p>Please select searched location on the map.</p>
            {/* <ul>
              {ctx.coordinates.map((city, i) => {
                return (
                  <li key={i}>
                    <p>
                      {city.name} {city.state}
                      <span
                        onClick={() => {
                          ctx.fetchWeatherAPI(city.lat, city.lng);
                        }}
                      >
                        select
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul> */}
          </>
        )}

      {!ctx.isLoading.position && !ctx.isLoading.weather && ctx.coordinates && ctx.weather && (
        <WeatherGraphics />
      )}
    </div>
  );
};

export default Content;
