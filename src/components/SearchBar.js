import React from "react";

function SearchBar() {
  return (
    <div className=" mb-5">
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="search" />
    </div>
  );
}

export default SearchBar;
