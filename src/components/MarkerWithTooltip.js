import { useContext } from "react";
import { Marker, Tooltip } from "react-leaflet";
import LocationContext from "../store/location-context";
import { circleIcon } from "../assets/circleIcon";

const MarkerWithTooltip = ({ position, labelName, labelCountry }) => {
  const ctx = useContext(LocationContext);
  return (
    <Marker
      position={position}
      icon={circleIcon}
      eventHandlers={{
        "click": () => {
          console.log("click marker");
          ctx.selectLocationFromMany(position[0], position[1]);
        }
      }}
    >
      {labelName && (
        <Tooltip direction="top" offset={[0, -16]}>{`${labelName}, ${labelCountry}`}</Tooltip>
      )}
    </Marker>
  );
};

export default MarkerWithTooltip;
