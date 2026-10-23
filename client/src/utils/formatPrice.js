/**
 * Formats property prices into Indian numbering units (Crores & Lakhs).
 * Examples:
 *  - 15,600,000  => "₹ 1.56 Cr"
 *  - 9,800,000   => "₹ 98 L"
 *  - 5,000,000   => "₹ 50 L"
 *  - 10,000,000  => "₹ 1 Cr"
 *  - 25,000      => "₹ 25,000"
 *
 * Robustly accepts:
 *  - Raw numbers: 15600000
 *  - Numeric strings: "15600000", "9800000"
 *  - Property price objects: { sale: 15600000 }, { rent: 25000 }
 *  - Already formatted strings: "1.56 Cr"
 *
 * @param {number|string|object} value
 * @param {string} currency - Currency symbol (defaults to "₹")
 * @param {object} options - Optional settings (e.g. { space: true })
 * @returns {string} Formatted price string
 */
export const formatPrice = (value, currency = "₹", options = {}) => {
  if (value === null || value === undefined || value === "") return "";

  // Extract numeric value if an object like { sale: 15600000 } is passed
  let rawValue = value;
  if (typeof value === "object" && value !== null) {
    rawValue = value.sale ?? value.rent ?? value.price ?? value.amount;
  }

  const symbol = currency || "₹";
  const space = options.space !== false ? " " : "";

  // If already formatted with Cr or L
  if (
    typeof rawValue === "string" &&
    (rawValue.includes("Cr") || rawValue.includes("L") || rawValue.includes("Lac"))
  ) {
    return rawValue.startsWith(symbol)
      ? rawValue
      : `${symbol}${space}${rawValue.trim()}`;
  }

  const num =
    typeof rawValue === "number"
      ? rawValue
      : parseFloat(String(rawValue).replace(/[^0-9.-]+/g, ""));

  if (isNaN(num) || num <= 0) {
    return `${symbol}${space}0`;
  }

  // Crores: 1 Cr = 1,00,00,000 (10^7)
  if (num >= 10000000) {
    const cr = num / 10000000;
    const formatted = parseFloat(cr.toFixed(2)).toString();
    return `${symbol}${space}${formatted} Cr`;
  }

  // Lakhs: 1 L = 1,00,000 (10^5)
  if (num >= 100000) {
    const lakh = num / 100000;
    const formatted = parseFloat(lakh.toFixed(2)).toString();
    return `${symbol}${space}${formatted} L`;
  }

  // Thousands: standard Indian comma formatting (e.g. ₹ 25,000 for monthly rent)
  if (num >= 1000) {
    return `${symbol}${space}${num.toLocaleString("en-IN")}`;
  }

  return `${symbol}${space}${num}`;
};

/**
 * Returns just the formatted value without currency symbol:
 * e.g. 15600000 => "1.56 Cr", 9800000 => "98 L"
 */
export const formatPriceShort = (value) => {
  const formatted = formatPrice(value, "", { space: false });
  return formatted.trim();
};

export default formatPrice;

