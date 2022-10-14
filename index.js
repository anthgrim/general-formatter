/**
 * @desc  Takes a number and returns it as currency format
 * @param {number} amount
 * @param {string} countryCode
 * @param {string} style
 * @param {string} currencyCode
 */
const convertToMoneyString = (amount, countryCode, style, currencyCode) => {
  return new Intl.NumberFormat(countryCode, {
    style: style,
    currency: currencyCode,
  }).format(amount);
};

/**
 * @desc  Takes a date-like string and returns a formatted date with the specified country code
 * @param {string} date
 * @param {string} countryCode
 * @returns string
 */
const convertToDateString = (date, countryCode) => {
  const newDate = new Date(date);
  newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());

  return new Intl.DateTimeFormat(countryCode).format(newDate);
};

const generalFormatter = {
  convertToMoneyString,
  convertToDateString,
};

export default generalFormatter;
