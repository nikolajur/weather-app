import React /* , { useContext }  */ from "react";
import LocationContext from "../store/location-context";

const Footer = () => {
  // const ctx = useContext(LocationContext);

  return (
    <>
      <p>Footer</p>
      {/*  {ctx.isLoading.position && <div>Position is loading</div>}
      {ctx.isLoading.weather && <div>Weather is loading</div>} */}
    </>
  );
};

export default Footer;
