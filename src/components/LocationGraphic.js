import { useContext } from "react";
import { useMap, Marker, Tooltip } from "react-leaflet";
import LocationContext from "../store/location-context";
import { circleIcon } from "../assets/circleIcon";
import WeatherGraphic from "./WeatherGraphic";

const Location = () => {
  console.log("render location");
  // console.log(weather);
  const ctx = useContext(LocationContext);
  const map = useMap();
  /* console.log(map.getCenter());
  console.log(map.getZoom()); */
  map.flyTo([ctx.coordinates.lat, ctx.coordinates.lng], 11, {
    animate: true,
    duration: 1,
    easeLinearity: 0.75
  });

  return (
    <Marker position={ctx.coordinates} alt="position marker" icon={circleIcon}>
      {ctx.weather && (
        <Tooltip
          permanent
          direction="top"
          position={{ lat: `${ctx.coordinates.lat + 0.005}`, lng: ctx.coordinates.lng }}
        >
          {/*  {ctx.weather.weather[0].main} */}
          <WeatherGraphic />
        </Tooltip>
      )}
    </Marker>
  );
};

export default Location;
