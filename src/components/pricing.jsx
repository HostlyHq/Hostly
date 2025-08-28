import { useState } from "react";
import PackageCard from "../Cards/packageCard.jsx";
import packagesData from "../data/packages.jsx";
import PremuimData from "../data/Premuim.jsx";
import PremuimCards from "../Cards/PremuimCard.jsx";
import TogglePrice from "../Buttons/buttonprice.jsx";
import ToggleButtons from "../Buttons/button.jsx";
import Header from "./header.jsx";

export default function Pricing() {
  const [billingType, setBillingType] = useState("monthly");

  // handle toggle callback
  const handlePriceToggle = (type) => {
    setBillingType(type);
  };

  // PACKAGES (Starter/Basic)
  const packagesElement = packagesData.map((_package) => {
    const listItem = _package.benefits.map((benefit) => (
      <li key={benefit} className="h-6">
        {benefit}
      </li>
    ));

    return (
      <PackageCard
        key={_package.id}
        header={_package.header}
        description={_package.description}
        priceCents={_package.priceCents}
        billingType={billingType}
        benefits={listItem}
      />
    );
  });

  // PREMIUM
  const PremuimElements = PremuimData.map((_premium) => {
    const premiumItems = _premium.benefits.map((benefit) => (
      <li key={benefit} className="h-6">
        {" "}
        {benefit}{" "}
      </li>
    ));

    return (
      <PremuimCards
        key={_premium.id}
        header={_premium.header}
        description={_premium.description}
        priceCents={_premium.priceCents}
        billingType={billingType}
        benefits={premiumItems}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-6 mt-12 justify-center w-full p-4">
        <h1 className="text-gray-950 text-5xl font-semibold">
          Get started with <span className="text-blue-700">Hostly</span>?
        </h1>
        <p className="text-xl text-gray-950 leading-6 font-normal">
          Choose the package that suits you
        </p>

        {/* PRICE TOGGLE */}
        <div className="flex flex-col justify-center gap-3 items-center p-4 sm:flex-row sm:gap-6 md:gap-8">
          <p className="text-[20px] font-[500] text-gray-950 sm:text-[25px]">
            Monthly
          </p>
          <TogglePrice onToggle={handlePriceToggle} />
          <p className="text-[20px] font-[500] text-gray-950 sm:text-[25px]">
            Yearly
          </p>
          <div className="flex items-center">
            <p className="w-[100px] sm:w-[110px] h-[28px] font-[600] text-[12px] text-gray-950 rounded-[8px] flex items-center justify-center bg-amber-300 py-1 px-2 ml-3 sm:ml-5">
              20% discount
            </p>
          </div>
        </div>

        {/* BASIC / PREMIUM TOGGLE */}
        <ToggleButtons
          packagesElement={packagesElement}
          PremuimElements={PremuimElements}
        />
      </div>
    </div>
  );
}
