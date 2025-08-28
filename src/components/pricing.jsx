import { useState } from "react";
import PackageCard from "../Cards/packageCard.jsx";
import packagesData from "../data/packages.jsx";
import PremuimData from "../data/Premuim.jsx";
import PremuimCards from "../Cards/PremuimCard.jsx";
import TogglePrice from "../Buttons/buttonprice.jsx";
import ToggleButtons from "../Buttons/button.jsx";

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
  const premiumElements = PremuimData.map((_premium) => {
    const premiumItems = _premium.benefits.map((benefit) => (
      <li key={benefit} className="h-6">
        {benefit}
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
    <div className="flex flex-col gap-6 mt-12 justify-center">
      <h1 className="text-gray-950 text-5xl font-semibold">
        Get started with <span className="text-blue-700">Hostly</span>?
      </h1>
      <p className="text-xl text-gray-950 leading-6 font-normal">
        Choose the package that suits you
      </p>

      {/* PRICE TOGGLE */}
      <div className="flex justify-center gap-10 items-center">
        <p className="text-[25px] font-[500] text-gray-950">Monthly</p>
        <TogglePrice onToggle={handlePriceToggle} />
        <p className="text-[25px] font-[500] text-gray-950">Yearly</p>
        <div className="flex items-center gap-5">
          <p className="w-[87px] h-[24px] font-[600] text-[10px] text-gray-950 rounded-[8px] flex items-center justify-center bg-amber-200">
            20% discount
          </p>
        </div>
      </div>

      {/* BASIC / PREMIUM TOGGLE */}
      <ToggleButtons
        packagesElement={packagesElement}
        premiumElements={premiumElements}
      />
    </div>
  );
}
