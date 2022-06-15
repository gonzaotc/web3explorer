import React from "react";
import SearchIcon from "../icons/SearchIcon";

const SearchBar = ({ searchAddress, setSearchAddress, setInspectedAddress }) => {
  const handleSearch = () => {
    setInspectedAddress(searchAddress); 
    setSearchAddress('')
    console.log("changing searchAddress");
  };

  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search address"
        className="w-[400px] h-12 bg-primaryLight rounded-2xl pl-12 pr-4 pb-1 text-md text-white/80 .placeholder-secondary::placeholder"
        value={searchAddress}
        onChange={event => {
          setSearchAddress(event.target.value);
        }}
      />
      <span className="absolute top-[50%] translate-y-[-50%] left-3 w-7 h-7 text-secondary cursor-pointer">
        <SearchIcon />
      </span>
      {searchAddress && searchAddress.length > 1 && (
        <button
          className="py-2.5 px-7 text-white bg-purple-700 rounded-xl font-semibold ml-2.5"
          onClick={handleSearch}
        >
          search
        </button>
      )}
    </div>
  );
};

export default SearchBar;
