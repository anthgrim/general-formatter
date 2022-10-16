# general-formatter

## [general-formatter](https://www.npmjs.com/package/general-formatter)

## Description

This is a small npm package, with a few functions that I use very often. I got tired of having to code it many different projects :)

The functions a very straightforward. I'm using the `Intl` object from JavaScript that provides language sensitive string comparison, number formatting, and date-time formatting. Check the official MDN docs here [JS Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

### Disclaimer

This is my first ever npm package, so if you have any suggestions or a better solution you are more than welcome to contribute to this project. Or if you want to keep adding more formatting or format validation functions :). But please let's keep it simple.

## Installation

Fork this repository, and follow the git commands bellow:

```
cd <YourProjectName>
npm i general-formatter
```

## How to use?

general-formatter uses ES6 so you need to use imports :)

```JavaScript
import generalFormatter from "general-formatter";

// or
import {convertToMoneyString, convertToDateString, validateEmailFormat} from "general-formatter"
```

## Sample Functions

### convertToMoneyString

This function takes a number amount, string country code, the style you want the number to be returned to, and the currency code

```JavaScript
const convertToMoneyString = (amount, countryCode, style, currencyCode) => {
  return new Intl.NumberFormat(countryCode, {
    style: style,
    currency: currencyCode,
  }).format(amount);
};

// Example
const myMoneyString = convertToMoneyString(29.465654023, "en-US", "currency", "USD")

console.log(myMoneyString) // Logs $29.47
```

### convertToDateString

This function takes a date-like string, and a country code string referring to the country date format you want your date to be returned.

```JavaScript
const convertToDateString = (date, countryCode) => {
  const newDate = new Date(date);
  newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());
  return new Intl.DateTimeFormat(countryCode).format(newDate);
};


// Example
const myDateString = convertToDateString("2022-10-10T22:11:02.024+00:00", "en-US")

console.log(myDateString) // Logs 10/10/2022
```

### validateEmailFormat

This function takes an string, and uses regex to validate if the string has a valid email format.

```JavaScript
const validateEmailFormat = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }
  return false;
};


// Example
const isValidEmail = validateEmailFormat("johndoe")

console.log(isValidEmail) // Logs false
```

## How to contribute

- Fork this repository
- Follow the git commands in your favorite terminal
  ```bash
  git clone git@github.com:anthgrim/formatter-npm-package.git
  cd formatter-npm-package
  git checkout -b <NameYourNewBranch>
  ```
- After adding your changes please commit the new branch and open a PR
  ```bash
  git add <YourChanges>
  git commit -m <Your changes comments>
  git push origin <Your branch name>
  ```
- Pull Request in GitHub [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
