import formatBillingPrice from "../utils/formatPrice";

export default function PremuimCards({ header, description, priceCents, benefit, billingType }) {
  return (
    <div
      className="flex flex-col max-w-[300px] min-w-[300px] text-orange-900
        rounded-2xl border-2 border-solid border-gray-300
        p-5 hover:shadow-orange-300 shadow-2xl hover:shadow-3xl cursor-pointer hover:scale-[1.02] transition-all hover:border-orange-300"
    >
      <p className="text-[28px] font-semibold mb-2 text-start">{header}</p>
      <p className="text-[12px] text-start mb-5">{description}</p>

      <p className="text-5xl leading-8 font-semibold text-start mb-1.5">
        {formatBillingPrice(priceCents, billingType)}
      </p>

      <p className="text-[14px] font-light text-start mb-6">
        {billingType === "monthly" ? "Per month" : "Per year"}
      </p>

      <button
        className="w-full h-12 text-gray-950 mb-6 
          bg-gray-200 rounded-[14px] border-2 text-[14px]
          font-semibold border-gray-400 hover:bg-orange-900 hover:text-gray-200"
      >
        Choose this plan
      </button>

      <div>
        <ul className="text-start pl-5 text-gray-500 font-semibold leading-6 list-disc">
          {benefit}
        </ul>
      </div>
    </div>
  );
}
