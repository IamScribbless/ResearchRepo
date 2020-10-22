import React from "react";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

function Questions() {
  const [searchFilter, setSearchFilter] = useState("");
  const handleSearchFilterChange = event => {
    setSearchFilter(event.target.value);
  };

  return (
    <div className="container mx-auto p-40">
      <seciton className="">
        <h1 className="text-6xl"> UX Insights </h1>
        <p className="text-xl ml-2">People-centered Insights are derived from questions about how they use our products, thier behaviors, intents, and expectations. Enter a question below:</p>
        <div className="mt-4">
          <SearchBar handleSearchFilterChange={handleSearchFilterChange} />
        </div>
      </seciton>
    </div>
  );
}

export default Questions;
