import PackageCard from "./packageCard.jsx";
import packagesData from "../data/packages.jsx";
import PremuimData from "../data/Premuim.jsx";
import PremuimCards from "./PremuimCard.jsx";
import { useState } from "react";

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
        benefit={listItem}
      />
    );
  });

  // PREMIUM
  const PremuimElements = PremuimData.map((_premuim) => {
    const Premium_items = _premuim.benefits.map((benefit) => (
      <li key={benefit} className="h-6">
        {benefit}
      </li>
    ));

    return (
      <PremuimCards
        key={_premuim.id}
        header={_premuim.header}
        description={_premuim.description}
        priceCents={_premuim.priceCents}
        billingType={billingType}
        benefit={Premium_items}
      />
    );
  });
  return (
    <>
      <div className="flex flex-col gap-6 mt-12 justify-center">
        <h1 className="text-gray-950 text-5xl font-semibold ">
          Get started with <span className="text-blue-700">Hostly</span>?
        </h1>
        <p className="text-1xl text-gray-950 leading-6 font-normal">
          Choose the package that suits you
        </p>

        {/* PRICE TOGGLE */}
        <div className="flex justify-center gap-10 align-middle">
          <p className="text-[25px] font-[500] text-gray-950 self-center">
            {" "}
            Monthly{" "}
          </p>
          <TogglePrice onToggle={handlePriceToggle} />
          <p className="text-[25px] font-[500] text-gray-950 align-middle">
            {" "}
            Yearly{" "}
          </p>
          <div className="flex items-center align-middle gap-5">
            <p className="w-[87px] h-[24px] font-[600] text-[10px] text-gray-950 rounded-[8px] content-center bg-amber-200 text-balance">
              20% discount
            </p>
          </div>
        </div>

        {/* BASIC / PREMIUM TOGGLE */}
        <ToggleButtons
          packagesElement={packagesElement}
          PremuimElements={PremuimElements}
        />

        {/* CTA SECTION */}
        <div className="justify-content-center">
          <div
            className="mt-[50px] flex-col justify-self-center content-center py-20 w-[80%]
                    bg-gradient-to-r from-blue-700 to-blue-100 rounded-3xl"
          >
            <h1 className="text-gray-950 text-3xl font-semibold mb-6">
              Be among the first to experience next-gen hosting
            </h1>
            <p className="text-[16px] text-gray-950 mb-9">
              Let's embody your beautiful ideas together, simplify the way you
              visualize your next big things.
            </p>
            <button className="bg-blue-600 w-[245px] h-[56px] rounded-4xl text-[18px] text-[500]">
              Get early access
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
