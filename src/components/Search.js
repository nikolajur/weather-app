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
      </div>
      <div className="favourites">
        <Favourites />
      </div>
    </>
  );
};

export default Search;
