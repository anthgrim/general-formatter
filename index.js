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

/**
 * @desc   Takes an string and verifies if has a correct email format
 * @param {string} value
 * @returns {boolean} true or false
 */
const validateEmailFormat = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }
  return false;
};

const generalFormatter = {
  convertToMoneyString,
  convertToDateString,
  validateEmailFormat,
};

export default generalFormatter;
