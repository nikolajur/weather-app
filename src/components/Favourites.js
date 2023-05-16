import { useState, useContext, useEffect } from "react";
import LocationContext from "../store/location-context";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const ctx = useContext(LocationContext);

  const selectFromFavourites = (e) => {
    e.preventDefault();
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
    <div className="favourites">
      {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png" alt="icon-star" /> */}
      {favourites.length >= 0 && (
        <form onSubmit={selectFromFavourites}>
          <select>
            <option value="">-- select favourite location --</option>
            {favourites.map((location, i) => {
              return (
                <option key={i * 10} value={{ lat: location.lat, lng: location.lng }}>
                  {location.name}
                </option>
              );
            })}
          </select>
          <button type="submit">Select</button>
        </form>
      )}
    </div>
  );
};

export default Favourites;
