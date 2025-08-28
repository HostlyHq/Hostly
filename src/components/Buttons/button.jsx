import React, { useState } from "react";

export default function ToggleButtons({ packagesElement, PremuimElements }) {
  const [showPackage, setShowPackage] = useState(true); // default: show package
  const [showPremium, setShowPremium] = useState(false);

  const handlePackageClick = () => {
    setShowPackage(true);
    setShowPremium(false);
  };

  const handlePremiumClick = () => {
    setShowPackage(false);
    setShowPremium(true);
  };

  return (
    <div className="flex flex-col items-center gap-6 mx-auto ">
      {/* Toggle Buttons */}
      <div
        className="flex justify-self-center w-[80%]
                justify-center mb-5 mt-20"
      >
        <button
          onClick={handlePackageClick}
          className={`w-[50%] transition-all ${
            showPackage
              ? "text-gray-950 text-3xl border-b-4 border-blue-700 pb-4  hover:border-blue-200 hover:text-blue-600"
              : "text-gray-950 text-3xl border-b-4 border-gray-300 pb-4 hover:border-gray-400 hover:text-gray-800"
          }`}
        >
          Basic
        </button>
        <button
          onClick={handlePremiumClick}
          className={`w-[50%] transition-all" ${
            showPremium
              ? "text-gray-950 text-3xl border-b-4 border-orange-700 pb-4  hover:border-orange-200 hover:text-orange-600 animate-pluse"
              : "text-gray-950 text-3xl border-b-4 border-gray-300 pb-4 hover:border-gray-400 hover:text-gray-800"
          }`}
        >
          Premium
        </button>
      </div>

      {/* Content */}
      <div className="justify-self-center mt-6 grid grid-cols-1 md:grid-cols-3 gap-10  content-center items-center justify-between ">
        {showPackage && packagesElement}
        {showPremium && PremuimElements}
      </div>
    </div>
  );
}

