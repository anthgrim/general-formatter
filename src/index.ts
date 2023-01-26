import { CurrencyOptions, DateOptions, EmailValidationOptions } from '../types'

/**
 * @description  Takes a number and returns it as currency format
 * @param {number} amount
 * @param {string} countryCode
 * @param {string} style
 * @param {string} currencyCode
 * @return {string} formatted string
 */
export function convertToMoneyString({
  amount,
  countryCode,
  style,
  currencyCode
}: CurrencyOptions): string {
  return new Intl.NumberFormat(countryCode, {
    style: style,
    currency: currencyCode
  }).format(amount)
}

/**
 * @description  Takes a date-like string and returns a formatted date with the specified country code
 * @param {string} date
 * @param {string} countryCode
 * @returns {string} formatted date string
 */
export function convertToDateString({
  date,
  countryCode
}: DateOptions): string {
  const newDate = new Date(date)
  newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset())
  return new Intl.DateTimeFormat(countryCode).format(newDate)
}

/**
 * @description   Takes an string and verifies if has a correct email format
 * @param {string} email
 * @returns {boolean} true or false
 */
export function validateEmailFormat({
  email
}: EmailValidationOptions): boolean {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}
