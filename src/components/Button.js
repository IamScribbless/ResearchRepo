import React from "react";

function Button({ children, color, onClick, ...rest }) {
  const backgroundColor = makeBackgrounColorClass(color)
  return (
    <button {...rest} onClick={onClick} className={`${backgroundColor} border border-gray-300 rounded-full px-3 py-2 my-1 mt-2 text-sm font-semibold text-white ml-2 mt-1`}>
      {children}
    </button>
  );
}

function makeBackgrounColorClass(color) {
    const backgroundColor = color === 'red' ? 'bg-red-700' : 'bg-gray-700'
    return backgroundColor
}

export default Button;
