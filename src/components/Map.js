import React, { useContext } from "react";
import LocationContext from "../store/location-context";
import { MapContainer, LayersControl, TileLayer } from "react-leaflet";
import LocationGraphics from "./LocationGraphics";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  console.log("render map");
  const ctx = useContext(LocationContext);
  const key = process.env.REACT_APP_API_KEY;

  return (
    <MapContainer center={[49.7, 15.3]} zoom={5}>
      <TileLayer
        attribution="&copy;Esri, HERE, Garmin, (c) OpenStreetMap contributors, and the GIS user community"
        url="https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        maxZoom={16}
      />
      <LayersControl position="topright" collapsed>
        {/*  <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}

        <LayersControl.Overlay name="radar">
          <TileLayer
            url={
              "https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=" + key
            }
            attribution="OpenWeatherMap"
            opacity={1}
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="temperature">
          <TileLayer
            url={"https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=" + key}
            attribution="OpenWeatherMap"
            opacity={1}
          />
        </LayersControl.Overlay>
      </LayersControl>

      {ctx.coordinates && (
        <>
          <LocationGraphics />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
