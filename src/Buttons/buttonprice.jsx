import React, { useState } from "react";

export default function TogglePrice({ onToggle }) {
  const [showMonthly, setShowMonthly] = useState(true);

  const handleToggle = () => {
    setShowMonthly((prev) => {
      const newValue = !prev;
      onToggle(newValue ? "monthly" : "yearly"); // notify parent
      return newValue;
    });
  };

  return (
    <div className="flex items-center gap-4">
      <span className={`text-lg ${showMonthly ? "font-bold" : ""}`}>Monthly</span>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={!showMonthly}
          onChange={handleToggle}
        />
        <div
          className="w-[93px] h-[53px] bg-blue-600 rounded-full 
          peer-focus:outline-none peer-checked:after:translate-x-full 
          peer-checked:after:border-white after:content-[''] after:absolute
          after:top-[5px] after:left-[0px] after:bg-white after:border 
          after:rounded-full after:h-[43px] after:w-[43px] 
          after:transition-all peer-checked:bg-orange-200"
        ></div>
      </label>

      <span className={`text-lg ${!showMonthly ? "font-bold" : ""}`}>Yearly</span>
    </div>
  );
}
