import { useContext } from "react";
import LocationContext from "./store/location-context";
import Header from "./components/Header";
import Search from "./components/Search";
import Map from "./components/Map";
import WeatherGraphics from "./components/WeatherGraphics";
import Footer from "./components/Footer";

// import { getCurrentWeather } from "./helpers/getCurrentWeather";

/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

function App() {
  console.log("render app");
  const ctx = useContext(LocationContext);
  console.log(ctx.isLoading);
  return (
    <div className="App">
      <Header />
      <Search />
      {(ctx.isLoading.position || ctx.isLoading.weather) && <p>Waiting for data...</p>}

      {ctx.weather && <WeatherGraphics />}
      <Map />
      <Footer />
    </div>
  );
}

export default App;
