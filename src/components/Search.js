import React from "react";
import SearchForm from "./SearchForm";
import SearchDevice from "./SearchDevice";
import Favourites from "./Favourites";

const Search = () => {
  return (
    <div className="search-container">
      <SearchForm />
      <SearchDevice />
      <Favourites />
    </div>
  );
};

export default Search;
