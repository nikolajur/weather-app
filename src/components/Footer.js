import React, { useContext } from "react";
import LocationContext from "../store/location-context";

const Footer = () => {
  const ctx = useContext(LocationContext);

  return (
    <>
      <footer>Footer</footer>
      {ctx.isLoading.position && <div>Waiting for position...</div>}
      {ctx.isLoading.weather && <div>Weather is loading</div>}
    </>
  );
};

export default Footer;
