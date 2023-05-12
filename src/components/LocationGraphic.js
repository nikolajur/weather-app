import { useContext } from "react";
import { useMap, Marker, Tooltip } from "react-leaflet";
import LocationContext from "../store/location-context";
import { circleIcon } from "../assets/circleIcon";

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

  return (
    <Marker position={ctx.coordinates} alt="position marker" icon={circleIcon}>
      {ctx.weather && (
        <Tooltip permanent direction="top" offset={[-50, 50]}>
          {ctx.weather}
        </Tooltip>
      )}
    </Marker>
  );
};

export default Location;
