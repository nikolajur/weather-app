import React, { useContext } from "react";
import LocationContext from "../store/location-context";

const SearchButton = () => {
  const ctx = useContext(LocationContext);

  const getCoordinatates = () => {
    ctx.getCoordinates();
  };
  return <button onClick={getCoordinatates}>use my location</button>;
};

export default SearchButton;
