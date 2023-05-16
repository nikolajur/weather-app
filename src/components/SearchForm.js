import React, { useContext, useRef, useEffect } from "react";
import LocationContext from "../store/location-context";

const SearchForm = () => {
  const ctx = useContext(LocationContext);
  const inputRef = useRef();
  console.log(ctx.isFromDevice);

  useEffect(() => {
    if (!ctx.isFromDevice) {
      console.log("focus input");
      inputRef.current.focus();
    }
  }, [ctx.isFromDevice]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("get city search");
    const searchedText = inputRef.current?.value;
    ctx.getCoordinates("search", searchedText, null);
  };

  return (
    <form className="search__location-form" onSubmit={onFormSubmit}>
      <input
        className="search__location-form__input"
        ref={inputRef}
        type="text"
        name="search"
        id="search"
        placeholder="type location..."
      />
      <button className="search__location-form__btn" type="submit">
        Find
      </button>
    </form>
  );
};

export default SearchForm;
