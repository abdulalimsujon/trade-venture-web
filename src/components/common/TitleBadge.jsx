import React from "react";

const TitleBadge = ({ bg_color, text, className }) => {
  return (
    <div className={`flex items-center gap-3 mb-8 ${className}`}>
      <div className={`h-10 w-4 rounded-md  ${bg_color}`}></div>
      <h3 className="font-semibold text-xl">{text}</h3>
    </div>
  );
};

export default TitleBadge;
