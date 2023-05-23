import { useContext } from "react";
import { Marker, Tooltip } from "react-leaflet";
import LocationContext from "../store/location-context";
import { circleIcon } from "../helpers/circleIcon";

const MarkerWithTooltip = ({ position, labelName, labelCountry }) => {
  const ctx = useContext(LocationContext);
  console.log("marker with tooltip render");
  console.log(labelName);
  console.log(ctx.coordinates.length);
  const tooltipLabel = labelName ? `${labelName}, ${labelCountry}` : null;
  console.log(tooltipLabel);

  const onClickHandler = () => {
    console.log("click marker");
    ctx.getCoordinates("select", null, position);
  };

  return (
    <Marker
      position={position}
      icon={circleIcon}
      /*  eventHandlers={{
        "click": () => {
          console.log("click marker");
          ctx.getCoordinates("select", null, position);
        }
      }} */
      eventHandlers={
        ctx.coordinates.length > 1
          ? { "click": onClickHandler }
          : {
              "click": () => {
                console.log("click na 1");
              }
            }
      }
    >
      {tooltipLabel && (
        <Tooltip
          /*  direction="top"
          offset={[0, -16]} */
          permanent
          eventHandlers={{
            "click": () => {
              console.log("click tooltip");
            }
          }}
        >
          {tooltipLabel ? tooltipLabel : "ahoj"}
        </Tooltip>
      )}
    </Marker>
  );
};

export default MarkerWithTooltip;
