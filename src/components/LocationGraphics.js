import { useContext } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import LocationContext from "../store/location-context";
import MarkerWithTooltip from "./MarkerWithTooltip";
// import { circleIcon } from "../assets/circleIcon";
// import WeatherGraphics from "./WeatherGraphics";

const LocationGraphics = () => {
  console.log("render location");
  // console.log(weather);
  const ctx = useContext(LocationContext);
  const coordinatesArray = ctx.coordinates.map((city) => {
    return [city.lat, city.lng];
  });
  // console.log(coordinatesArray);
  const bounds = L.polygon(coordinatesArray).getBounds();
  console.log(bounds);
  // console.log(ctx.coordinates.length);

  const map = useMap();

  map.flyToBounds(bounds, { maxZoom: 12, animate: true, duration: 1, easeLinearity: 0.75 });

  return ctx.coordinates.map((item, i) => {
    // console.log(item);
    return (
      <MarkerWithTooltip
        position={[item.lat, item.lng]}
        key={i}
        labelName={item.name}
        labelCountry={item.country}
      />
    );
  });
};

export default LocationGraphics;
