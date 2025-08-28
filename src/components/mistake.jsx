"./header.jsx";
import ChooseCard from "./choose-us.jsx";
import Footer from "./footer.jsx";
import PackageCard from "./packageCard.jsx";
import packagesData from "../data/packages.jsx";
import NetworkCard from "./networkCard.jsx";
import PremuimData from "../data/Premuim.jsx";
import PremuimCards from "./PremuimCard.jsx";
import ToggleButtons from "./Buttons/button.jsx";
import TogglePrice from "./Buttons/togglePrice.jsx";
import YearPrice from "../utils/YearPrice.jsx";
import { useState } from "react";
export default function Landing_Page() {
  const [billingType, setBillingType] = useState("monthly");
  const handlePriceToggle = (type) => {
    setBillingType(type);
  };
  const packagesElement = packagesData.map((_package) => {
    const listItem = _package.benefits.map((benefit) => {
      return (
        <li key={benefit} className="h-6">
          {" "}
          {benefit}{" "}
        </li>
      );
    });
    return (
      <PackageCard
        key={_package.id}
        header={_package.header}
        description={_package.description}
        priceCents={
          billingType === "monthly"
            ? _package.formatPrice()
            : _package.YearPrice()
        }
        benefit={listItem}
      />
    );
  });
  packagesElement;
  const PremuimElements = PremuimData.map((_premuim) => {
    const Premium_items = _premuim.benefits.map((benefit) => {
      return (
        <li key={benefit} className="h-6">
          {" "}
          {benefit}{" "}
        </li>
      );
    });
    return (
      <PremuimCards
        key={_premuim.id}
        header={_premuim.header}
        description={_premuim.description}
        priceCents={
          billingType === "monthly"
            ? _premuim.formatPrice()
            : _premuim.YearPrice()
        }
        benefit={Premium_items}
      />
    );
  });
  return (
    <div className="landing-page-container">
      {" "}
      <div className="h-screen bg-[url('/public/Intersect.svg')] bg-gray-900 bg-center bg-no-repeat bg-cover">
        {" "}
        <Header />{" "}
        <div className="text-center relative h-[515px] top-1/2 left-1/2 w-[75%] transform translate-x-[-50%] translate-y-[-50%] bg-transparent backdrop-blur-md flex flex-col justify-center rounded-4xl min-w-0">
          {" "}
          <h1 className="font-['Merriweather'] mb-4 font-black text-5xl">
            {" "}
            YOUR IDEAS. LIVE IN SECONDS{" "}
          </h1>{" "}
          <p className="text-2xl mb-8">
            {" "}
            From code to global scene <br /> Hostly makes deployment instant,
            secure, and effortless{" "}
          </p>{" "}
          <section className="flex justify-center gap-4">
            {" "}
            <button className="w-[207px] h-9 text-1x1 rounded-full bg-blue-600">
              {" "}
              See how it works{" "}
            </button>{" "}
            <button className="w-[207px] h-9 text-1x1 rounded-full bg-blue-900">
              {" "}
              Get early Access{" "}
            </button>{" "}
          </section>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex flex-col justify-center items-center">
        {" "}
        <p className="font-inter font-medium text-[18px] text-blue-600 leading-[147%] my-6 tracking-[10px] font-['Inter']">
          {" "}
          Why Choose Us{" "}
        </p>{" "}
        <h1 className="text-gray-600 font-bold text-6xl leading-[100%] mb-10">
          {" "}
          Why Hostly is Different{" "}
        </h1>{" "}
        <div className="flex gap-8 my-6 mb-24">
          {" "}
          <ChooseCard
            icon="/public/lightning.png"
            number="01"
            heading="Lightning Deploy"
            description="Launch sites in under 10 seconds"
          />{" "}
          <NetworkCard
            icon={"/public/network.png"}
            number="02"
            heading="Built for Scale"
            description="Auto-optimized for millions of visitors"
          />{" "}
          <ChooseCard
            icon="/public/checkmark.png"
            number="03"
            heading="Zero Hassle"
            description="No config files, No manual server setup"
          />{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between w-[80%] max-h-20 mb-6 rounded-full py-3 px-4 bg-blue-600 content-center">
          {" "}
          <p className="text-2xl font-semibold justify-self-start">
            {" "}
            BE AMONG US TO EXPERIENCE NEXT-GEN HOSTING{" "}
          </p>{" "}
          <button className="h-11 w-[337px] rounded-full bg-gray-700 justify-self-end">
            {" "}
            Get Early Access Now{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex flex-col gap-6 mt-12">
        {" "}
        <h1 className="text-gray-950 text-2xl font-semibold">
          {" "}
          Ready to get started with <br /> Hostly?{" "}
        </h1>{" "}
        <p className="text-2xl text-gray-950 leading-6 font-normal">
          {" "}
          Choose the package that suits you{" "}
        </p>{" "}
        {/* PRICE TOGGLE */}{" "}
        <div className="flex justify-center gap-10">
                  {" "}
                  <p className="text-[25px] font-[500] text-gray-950 self-center"> Monthly </p>
          <TogglePrice onToggle={handlePriceToggle} />{" "}
          <div className="flex items-center gap-5">
                      {" "}
                      <p className="text-[25px] font-[500] text-gray-950 align-middle"> Yearly </p>
            <p className="w-[87px] h-[24px] font-[600] text-[10px] text-gray-950 rounded-[8px] content-center bg-amber-200">
              {" "}
              20% discount{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* BASIC / PREMIUM TOGGLE */}{" "}
        <ToggleButtons
          packagesElement={packagesElement}
          PremuimElements={PremuimElements}
        />{" "}
        <div className="mt-[50px] justify-self-center content-center py-20 w-[80%] bg-gradient-to-r from-blue-700 to-blue-100 rounded-3xl">
          {" "}
          <h1 className="text-gray-950 text-3xl font-semibold mb-6">
            {" "}
            Be amaong the first to experience next-gen hosting{" "}
          </h1>{" "}
          <p className="text-[16px] text-gray-950 mb-9">
            {" "}
            Let's embody your beutiful ideas together, simplify the way you
            visualize your next big things.{" "}
          </p>{" "}
          <button className="bg-blue-600 w-[245px] h-[56px] rounded-4xl text-[18px] text-[500]">
            {" "}
            Get early acceess{" "}
          </button>{" "}
        </div>{" "}
        <Footer />{" "}
      </div>{" "}
    </div>
  );
}
