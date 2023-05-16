import React from "react";
import SearchForm from "./SearchForm";
import SearchDevice from "./SearchDevice";
import Favourites from "./Favourites";

const Search = () => {
  return (
    <>
      <div className="search">
        <SearchForm />
        <SearchDevice />
        <Favourites />
      </div>
      <div className="favourites"></div>
    </>
  );
};

export default Search;
