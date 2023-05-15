import React, { useContext } from "react";
import LocationContext from "../store/location-context";
import { MapContainer, LayersControl, LayerGroup, TileLayer } from "react-leaflet";
import LocationGraphics from "./LocationGraphics";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  console.log("render map");
  const ctx = useContext(LocationContext);
  const key = process.env.REACT_APP_API_KEY;

  return (
    <MapContainer center={[49.7, 15.3]} zoom={5}>
      <LayersControl position="topright" collapsed>
        {/*   <LayersControl.BaseLayer name="OSM">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer> */}

        <LayersControl.BaseLayer name="osm" checked>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            maxZoom={20}
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="group radar">
          <LayerGroup>
            <TileLayer
              attribution='&copy;&nbsp;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;&nbsp;<a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              maxZoom={20}
            />

            {/*  <TileLayer
              attribution="&copy;Esri, HERE, Garmin, (c) OpenStreetMap contributors, and the GIS user community"
              url="https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              maxZoom={16}
            /> */}
            <TileLayer
              url={
                "https://tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png?appid=" + key
              }
              attribution='&copy;&nbsp;<a href="https://openweathermap.org/">OpenWeather</a>'
              opacity={1}
            />
          </LayerGroup>
        </LayersControl.BaseLayer>

        {/*  <LayersControl.BaseLayer name="group clouds">
          <LayerGroup>
            <TileLayer
              attribution="&copy;Esri, Maxar, Earthstar Geographics, and the GIS User Community"
              url="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              maxZoom={16}
            />
            <TileLayer
              url={"https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=" + key}
              attribution="OpenWeatherMap"
              opacity={1}
            />
          </LayerGroup>
        </LayersControl.BaseLayer> */}

        {/*  <LayersControl.BaseLayer name="imagery">
          <TileLayer
            attribution="&copy;Esri, Maxar, Earthstar Geographics, and the GIS User Community"
            url="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            maxZoom={16}
          />
        </LayersControl.BaseLayer> */}

        {/*  <LayersControl.Overlay name="radar">
          <TileLayer
            url={
              "https://tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png?appid=" + key
            }
            attribution="OpenWeatherMap"
            opacity={2}
          />
        </LayersControl.Overlay> */}

        {/*    <LayersControl.Overlay name="temperature">
          <TileLayer
            url={"https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=" + key}
            attribution="OpenWeatherMap"
            opacity={1}
          />
        </LayersControl.Overlay> */}

        {/*  <LayersControl.Overlay name="clouds">
          <TileLayer
            url={"https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=" + key}
            attribution="OpenWeatherMap"
            opacity={1}
          />
        </LayersControl.Overlay> */}
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
