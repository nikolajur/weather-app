import React, { useContext /* , useState */ } from "react";
import LocationContext from "../store/location-context";

const SearchButton = () => {
  const ctx = useContext(LocationContext);
  /*  const [showTooltip, setShowTooltip] = useState(); */

  /* const getCoordinatates = () => {
    
    console.log("position button clicked");
  }; */
  return (
    <>
      <button
        className="search-position-btn"
        onClick={() => {
          ctx.getCoordinates("device");
        }}
        /* onMouseEnter={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }} */
      >
        <img
          className="search-position-btn__icon"
          src="https://img.icons8.com/ios-filled/50/center-direction.png"
          alt="use my location"
        />
      </button>
      {/* {showTooltip && <p className="search-position-tooltip">Get My Position</p>} */}
    </>
  );
};

export default SearchButton;
