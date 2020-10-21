import React from "react";

function SearchBar({handleSearchFilterChange, searchFilter}) {
  return (
    <div className=" bg-green-200">
    <form >
      <input 
      className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Search for keywords, tags, or dates" 
      onChange={handleSearchFilterChange}
          value={searchFilter}
          />
    
    </form>
    </div>
  );
}

export default SearchBar;
