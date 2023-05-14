import React, { useContext, useRef, useEffect } from "react";
import LocationContext from "../store/location-context";

const SearchForm = () => {
  const ctx = useContext(LocationContext);
  const inputRef = useRef();

  useEffect(() => {
    if (!ctx.isFromDevice) {
      inputRef.current.focus();
    }
  }, [ctx.isFromDevice]);

  return (
    <form className="search-location-form">
      <input
        className="search-location-form__input"
        ref={inputRef}
        type="text"
        name="search"
        id="search"
        placeholder="location..."
      />
      <button className="search-location-form__btn" type="submit">
        Find
      </button>
    </form>
  );
};

export default SearchForm;
