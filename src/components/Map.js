import React, { useContext } from "react";
import LocationContext from "../store/location-context";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import Location from "./Location";
import { defaultIcon } from "../assets/defaultIcon";
import { circleIcon } from "../assets/circleIcon";
import "leaflet/dist/leaflet.css";

const Map = () => {
  console.log("render map");
  const ctx = useContext(LocationContext);

  return (
    <MapContainer center={[49.7, 15.3]} zoom={5}>
      {/* <TileLayer
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        maxZoom={16}
      /> */}

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {ctx.coordinates.lat && (
        <>
          <Location />
          {/*  <Marker position={ctx.coordinates} alt="position marker" icon={defaultIcon} /> */}
          <Marker position={ctx.coordinates} alt="position marker" icon={circleIcon}>
            {ctx.weather && (
              <Tooltip permanent direction="top" offset={[-50, 50]}>
                {ctx.weather}
              </Tooltip>
            )}
          </Marker>
        </>
      )}
    </MapContainer>
  );
};

export default Map;
