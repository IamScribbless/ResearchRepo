import React from "react";


const PageLayout = ({ children }) => {
  return (
      <div className=" container mx-auto ">
        {children}
      </div>
   
  );
};

export default PageLayout;
