// import { useContext } from "react";
// import LocationContext from "./store/location-context";
import Header from "./components/Header";
import Search from "./components/Search";
// import Favourites from "./components/Favourites";
import TextContent from "./components/TextContent";
import Map from "./components/Map";
import Footer from "./components/Footer";

// import { getCurrentWeather } from "./helpers/getCurrentWeather";

/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

function App() {
  console.log("render app");

  return (
    <div className="app">
      <Header />
      <Search />
      {/* <Favourites /> */}
      <TextContent />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
