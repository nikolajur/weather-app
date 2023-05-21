import React, { useContext } from "react";
import LocationContext from "../store/location-context";
import { MapContainer /* , LayersControl, LayerGroup */, TileLayer } from "react-leaflet";
import LocationGraphics from "./LocationGraphics";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  console.log("render map");
  const ctx = useContext(LocationContext);
  // const key = process.env.REACT_APP_API_KEY;

  return (
    <MapContainer center={[49.7, 15.3]} zoom={5}>
      {/* <LayersControl position="topright" collapsed>
        <LayersControl.BaseLayer name="basemap" checked>
          <TileLayer
            attribution='&copy;&nbsp;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;&nbsp;<a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            maxZoom={20}
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="precipitation">
          <LayerGroup>
            <TileLayer
              attribution='&copy;&nbsp;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;&nbsp;<a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              maxZoom={20}
            />
            <TileLayer
              url={
                "https://tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png?appid=" + key
              }
              attribution='&copy;&nbsp;<a href="https://openweathermap.org/">OpenWeather</a>'
              opacity={1}
            />
          </LayerGroup>
        </LayersControl.BaseLayer>
      </LayersControl> */}
      <TileLayer
        attribution='&copy;&nbsp;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;&nbsp;<a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        maxZoom={20}
      />
      {ctx.coordinates && (
        <>
          <LocationGraphics />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
