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

  /*   useEffect(() => {
    map.locate();
    console.log("map locate");
    map.on("locationfound", (location) => {
      console.log("location found");
      console.log(location.latlng);
      map.flyTo([location.latlng.lat, location.latlng.lng], 12);
      ctx.updateLocation({ lat: location.latlng.lat, lng: location.latlng.lng });
    });
    map.on("locationerror", (error) => console.log(error));
  
  }, [map, ctx]); */

  /* useMapEvents({
    locationfound: (location) => {
      console.log("location found:", location.latlng);
      ctx.updateLocation({ lat: location.latlng.lat, lng: location.latlng.lng }, true);
      
    },
    locationerror: (error) => {
      console.log(error);
    }
  }); */

  return null;
};

export default Location;
