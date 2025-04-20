"use client";
import React, { useState } from "react";

function RadioGroup() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex gap-5 items-center flex-wrap mt-4">
      <label className="flex gap-2 items-center">
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
          className="accent-[#1c1c1c]"
        />
        General Inquiry
      </label>
      <br />
      <label className="flex gap-2 items-center">
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
          className="accent-[#1c1c1c]"
        />
        General Inquiry
      </label>
      <br />
      <label className="flex gap-2 items-center">
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
          className="accent-[#1c1c1c]"
        />
        General Inquiry
      </label>
    </div>
  );
}

export default RadioGroup;
