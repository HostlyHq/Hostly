export default function formatBillingPrice(
  priceCents,
  billingType = "monthly"
) {
  if (priceCents === 0) return "Free";

  if (billingType === "monthly") {
    return `$${(priceCents / 100).toFixed(2)}`;
  } else if (billingType === "yearly") {
    // yearly = 12 months with 20% discount
    const yearlyCents = priceCents * 12 * 0.8;
    return `$${(yearlyCents / 100).toFixed(2)}`;
  } else {
    throw new Error("Invalid billing type. Use 'monthly' or 'yearly'.");
  }
}
