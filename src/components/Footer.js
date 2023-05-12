import React, { useContext } from "react";
import LocationContext from "../store/location-context";

const Footer = () => {
  const ctx = useContext(LocationContext);

  return (
    <>
      <footer>Footer</footer>
      {ctx.isLoading.position && <div>Waiting for position...</div>}
      {ctx.isLoading.weather && <div>Weather is loading</div>}
      <p>
        Icons by{" "}
        <a target="_blank" href="https://icons8.com" rel="noreferrer">
          Icons8
        </a>
      </p>
    </>
  );
};

export default Footer;
