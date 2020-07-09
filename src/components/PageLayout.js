import React from "react";
import Nav from "./Nav";

const PageLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="flex flex-row">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
