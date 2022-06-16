import React from "react";
import SearchIcon from "../icons/SearchIcon";

const SearchBar = ({ searchAddress, setSearchAddress, setInspectedAddress }) => {
  const handleSearch = () => {
    if (searchAddress && searchAddress.trim().length === 42) {
      setInspectedAddress(searchAddress);
      setSearchAddress("");
      console.log("changing searchAddress");
    }
  };

  return (
    <form className="relative flex justify-center">
      <input
        type="text"
        placeholder="Search address"
        className="w-[90vw] sm:w-[40vw] lg:w-[20vw] lg:min-w-[350px] md:mr-4 mt-4 md:mt-0 h-12 bg-primaryLight rounded-2xl pl-12 pr-4 pb-1 text-md text-white/80 .placeholder-secondary::placeholder"
        value={searchAddress}
        onChange={event => {
          setSearchAddress(event.target.value);
        }}
      />
      <span className="mt-2 md:mt-0 absolute top-[50%] translate-y-[-50%] left-3 w-7 h-7 text-secondary cursor-pointer">
        <SearchIcon onClick={handleSearch} searchAddress={searchAddress} />
      </span>
      {/* {searchAddress && searchAddress.length === 42 && (
        <button
          className="py-2.5 px-6 hidden 2xl:inline text-white bg-purple-700 rounded-xl font-semibold ml-1"
          onClick={handleSearch}
        >
          search
        </button>
      )} */}
    </form>
  );
};

export default SearchBar;
