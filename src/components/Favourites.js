import { useState, useContext, useEffect } from "react";
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
    // console.log(selectedValue);
    // console.log(JSON.parse(formJson));
    // const data = [...formData.entries()];
    // console.log(JSON.parse(formJson.favourites));
    // console.log(formJson.favourites[1]);

    ctx.getCoordinates("select", null, selectedValue);
  };

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
      const isFavourite = favourites.some((location) => {
        return location.name === ctx.weather.name;
      });

      if (!isFavourite) {
        const savedFavourites = [...favourites];

        if (savedFavourites.length === 5) {
          savedFavourites.unshift();
        }

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
    }
  }, [ctx.weather]);

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
