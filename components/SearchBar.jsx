import React from "react";
import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search address"
        className="w-[400px] h-12 bg-primaryLight rounded-2xl pl-12 pr-4 pb-1 text-md text-white/80 .placeholder-secondary::placeholder"
      />
      <span className="absolute top-[50%] translate-y-[-50%] left-3 w-7 h-7 text-secondary cursor-pointer">
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;
