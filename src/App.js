import { useState, useEffect, useContext } from "react";
import LocationContext from "./store/location-context";
import Header from "./components/Header";
import Search from "./components/Search";
import Map from "./components/Map";
import Footer from "./components/Footer";

import { getCurrentWeather } from "./helpers/getCurrentWeather";

/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

function App() {
  console.log("render app");
  // const ctx = useContext(LocationContext);
  // console.log(ctx);
  // verze AJ, CZ
  /*  const [location, setLocation] = useState(null);
  const [isLocationFromDevice, setIsLocationFromDevice] = useState(false);
  const [weather, setWeather] = useState(null); */

  /* const updateLocation = (coordinates, deviceGPS) => {
    setLocation(coordinates);
    if (isLocationFromDevice !== deviceGPS) {
      setIsLocationFromDevice(deviceGPS);
    }
  };
 */
  /*   useEffect(() => {
    // nové query
    console.log(location);
    if (ctx.location) {
      const currentWeather = getCurrentWeather(location.lat, location.lng);
      console.log(currentWeather);
      setWeather(currentWeather);
    }
  }, [ctx.location]); */

  // console.log("app " + ctx.weather);

  return (
    <div className="App">
      <Header />
      <Search />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
