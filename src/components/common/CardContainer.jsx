import React from "react";

const CardContainer = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg p-5 ${className}`}>{children}</div>
  );
};

export default CardContainer;
