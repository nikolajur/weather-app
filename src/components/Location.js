import { useContext } from "react";
import { useMap } from "react-leaflet";
import LocationContext from "../store/location-context";

const Location = () => {
  console.log("render location");
  // console.log(weather);
  const ctx = useContext(LocationContext);
  const map = useMap();
  /* console.log(map.getCenter());
  console.log(map.getZoom()); */
  map.flyTo([ctx.coordinates.lat, ctx.coordinates.lng], 12, {
    animate: true,
    duration: 1,
    easeLinearity: 0.75
  });

  return null;
};

export default Location;
