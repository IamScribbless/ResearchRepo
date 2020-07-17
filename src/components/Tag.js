import React from "react";

function Tag({ tagName }) {
  return (
    <span className="inline-block bg-gray-200 hover:bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2">
      {tagName}
    </span>
  );
}

export default Tag;
