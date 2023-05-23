// import { useContext } from "react";
// import LocationContext from "./store/location-context";
import { motion } from "framer-motion";
import { firstRenderVariants } from "./helpers/animation-variants";
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
    <motion.div className="app" variants={firstRenderVariants} initial="hidden" animate="visible">
      <Header />
      <Search />
      <TextContent />
      <Map />
      <Footer />
    </motion.div>
  );
}

export default App;
