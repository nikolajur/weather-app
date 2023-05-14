import React, { useContext } from "react";
import LocationContext from "../store/location-context";

const SearchButton = () => {
  const ctx = useContext(LocationContext);

  const getCoordinatates = () => {
    ctx.getCoordinates();
  };
  return (
    <button className="search-position-btn" onClick={getCoordinatates}>
      <img
        className="search-position-btn__icon"
        src="https://img.icons8.com/ios-filled/50/center-direction.png"
        alt="use my location"
      />
    </button>
  );
};

export default SearchButton;
