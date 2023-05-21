import { useState, useContext, useEffect, useCallback } from "react";
import LocationContext from "../store/location-context";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const ctx = useContext(LocationContext);
  console.log(favourites);

  const selectFromFavourites = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const selectedValue = JSON.parse(formJson.favourites); // array

    ctx.getCoordinates("select", null, selectedValue);
  };

  const updateFavourites = useCallback(() => {
    // nová lokalita počasí je ve state?
    const isFavourite = favourites.some((location) => {
      return location.name === ctx.weather.name;
    });
    console.log("update favourite");
    console.log(isFavourite);

    // pokud není
    if (!isFavourite) {
      console.log("update favourite není ve favourite");
      let savedFavourites = favourites.length === 5 ? favourites.slice(1) : [...favourites];

      /* 
      let savedFavourites;

      if (favourites.length >== 5) {
        savedFavourites = favourites.slice(0,4);
      } else {
        savedFavourites = [...favourites];
      } */

      console.log(savedFavourites);

      savedFavourites.push({
        name: ctx.weather.name,
        lat: ctx.weather.coord.lat,
        lng: ctx.weather.coord.lon
      });

      console.log(savedFavourites);
      setFavourites(savedFavourites);
      localStorage.clear("my-location");
      localStorage.setItem("my-locations", JSON.stringify(savedFavourites));
    }
  }, [ctx.weather, favourites]);

  // after first render getting data from the local storage
  useEffect(() => {
    const myFavourites = JSON.parse(localStorage.getItem("my-locations"));
    if (myFavourites) {
      setFavourites(myFavourites);
    }
  }, []);

  // after weather data loads, save location into local storage & update state

  useEffect(() => {
    if (ctx.weather) {
      updateFavourites();
    }
  }, [ctx.weather, updateFavourites]);

  return (
    <form className="favourites-form" id="favourites-form" onSubmit={selectFromFavourites}>
      <select name="favourites" form="favourites-form">
        <option value="">-- select favourite location --</option>
        {favourites.length >= 0 &&
          favourites.map((location, i) => {
            return (
              <option key={i * 10} value={`[${location.lat}, ${location.lng}]`}>
                {location.name}
              </option>
            );
          })}
      </select>
      <button className="favourites-form-btn" type="submit">
        Select
      </button>
    </form>
  );
};

export default Favourites;
