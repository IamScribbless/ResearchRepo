import React from "react";

function Button({ children, color, onClick, ...rest }) {
  const backgroundColor = makeBackgrounColorClass(color)
  return (
    <button {...rest} onClick={onClick} className={`${backgroundColor} border border-gray-300  px-6 py-1  my-1  text-sm font-semibold text-white mt-1`}>
      {children}
    </button>
  )
}

function makeBackgrounColorClass(color) {
    const backgroundColor = color === 'red' ? 'bg-red-700' : 'bg-gray-700'
    return backgroundColor
}

export default Button;
