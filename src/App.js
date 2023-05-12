/* import { useState, useEffect, useContext } from "react";
import LocationContext from "./store/location-context"; */
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchButton from "./components/SearchButton";
import Map from "./components/Map";
import Footer from "./components/Footer";

// import { getCurrentWeather } from "./helpers/getCurrentWeather";

/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

function App() {
  console.log("render app");

  return (
    <div className="App">
      <Header />
      <SearchForm />
      <SearchButton />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
