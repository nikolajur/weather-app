import { useContext } from "react";
import L from "leaflet";
import { useMap, Marker } from "react-leaflet";
import LocationContext from "../store/location-context";
import { circleIcon } from "../assets/circleIcon";
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
  // console.log(bounds);
  // console.log(ctx.coordinates.length);

  const map = useMap();
  map.flyToBounds(bounds);
  /* console.log(map.getCenter());
  console.log(map.getZoom()); */
  /*   map.flyTo([ctx.coordinates.lat, ctx.coordinates.lng], 12, {
    animate: true,
    duration: 1,
    easeLinearity: 0.75
  }); */

  return ctx.coordinates.map((item, i) => {
    // console.log(item);
    return <Marker position={[item.lat, item.lng]} icon={circleIcon} key={i} />;
  });

  /*  if (ctx.coordinates.length) {
    ctx.coordinates.map((city, i) => {
      console.log({ lat: city.lat, lng: city.lng });
      return <Marker position={[15, 50]} key={i} alt="position marker" icon={circleIcon} />;
    });
  } else {
    console.log(ctx.coordinates);
    return <Marker position={ctx.coordinates} alt="position marker" icon={circleIcon} />;
  } */
};

export default LocationGraphics;
