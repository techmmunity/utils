<div align="center">

<img src="https://github.com/techmmunity/eslint-config/raw/master/resources/logo.gif" width="300" height="300">

# Techmmunity - Utils

<a href="https://github.com/techmmunity/eslint-config">
	<img src="https://img.shields.io/badge/style%20guide-Techmmunity-01d2ce?style=for-the-badge" alt="Style Guide: Techmmunity">
</a>
<a href="https://www.codefactor.io/repository/github/techmmunity/utils">
	<img src="https://www.codefactor.io/repository/github/techmmunity/utils/badge?style=for-the-badge" alt="CodeFactor">
</a>
<a href="https://coveralls.io/github/techmmunity/utils?branch=master">
	<img src="https://img.shields.io/coveralls/github/techmmunity/utils/master?style=for-the-badge" alt="Coveralls">
</a>
<a href="https://github.com/techmmunity/utils/actions/workflows/coverage.yml">
	<img src="https://img.shields.io/github/workflow/status/techmmunity/utils/Collect%20Coverage?label=tests&logo=github&style=for-the-badge" alt="Tests">
</a>
<a href="https://www.npmjs.com/package/@techmmunity/utils">
	<img src="https://img.shields.io/npm/v/@techmmunity/utils.svg?color=CC3534&style=for-the-badge" alt="Npm">
</a>
<a href="https://www.npmjs.com/package/@techmmunity/utils">
	<img src="https://img.shields.io/npm/dw/@techmmunity/utils.svg?style=for-the-badge" alt="Downloads">
</a>

<br>
<br>

</div>

Package of utils, make in a way to let you import only the functions that you really need, so it doesn't make your project heavier than it needs to be.

## Install

With Yarn:

```sh
yarn add @techmmunity/utils
```

With NPM:

```sh
npm i @techmmunity/utils
```

# Docs

## Miscellaneous

| function   | description                                     |
| ---------- | ----------------------------------------------- |
| `cleanObj` | Remove undefined and null values from an object |

## `get*`

| function               | description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `getArrayUniqueValues` | Remove duplicated values of an array (only work with primitive values) |
| `getHexColorLuma`      | Return the color luma of a hex color                                   |
| `getEnumValues`        | Return the enum values                                                 |
| `getTypeof`            | Fix native "typeof"                                                    |

## `has*`

| function             | description                        |
| -------------------- | ---------------------------------- |
| `hasEmojis`          | Return true if value has emojis    |
| `hasHtmlTags`        | Return true if value has html tags |
| `hasRequiredEnvVars` | Verify if all env vars are defined |
| `hasUrl`             | Return true if value has a url     |

## `is*`

| function           | description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `isBrazilianPhone` | Return true if value is a brazilian phone                    |
| `isCpf`            | Return true if value is a CPF                                |
| `isDarkHexColor`   | Return true if value is a dark hex color                     |
| `isDate`           | Return true if value is a valid date in the specified format |
| `isDateDMY`        | Return true if value is a valid date DD-MM-YYY               |
| `isDateDMYS`       | Return true if value is a valid date DD/MM/YYY               |
| `isDateMDY`        | Return true if value is a valid date MM-DD-YYY               |
| `isDateMDYS`       | Return true if value is a valid date MM/DD/YYY               |
| `isDateYMD`        | Return true if value is a valid date YYYY-MM-DD              |
| `isDateYMDS`       | Return true if value is a valid date YYYY/MM/DD              |
| `isDivisibleByTen` | Return true if value is divisible by ten                     |
| `isEmail`          | Return true if value is a valid email                        |
| `isEmoji`          | Return true if value is an emoji (has some false-positives!) |
| `isEmptyArray`     | Checks if is an array and it's empty                         |
| `isEmptyObject`    | Checks if is an object and it's empty                        |
| `isEven`           | Return true if value is a even number                        |
| `isHerokuApiKey`   | Return true if value is a heroku api key                     |
| `isHexColor`       | Return true if value is a valid hex color                    |
| `isIpv4`           | Return true if value is a valid ipv4                         |
| `isIpv4WithMask`   | Return true if value is a valid ipv4 with mask               |
| `isLeap`           | Return true if value is a leap year                          |
| `isLightHexColor`  | Return true if value is a light hex color                    |
| `isMaskedCpf`      | Return true if value is a masked CPF                         |
| `isNumeric`        | Return true if value is a numeric string                     |
| `isOdd`            | Return true if value is a odd number                         |
| `isStrongPassword` | Return true if value is a strong password                    |
| `isUrl`            | Return true if value is a valid url                          |
| `isUsername`       | Return true if value is a valid username                     |
| `isUuidV4`         | Return true if value is a valid uuid (v4)                    |

## `isNot*`

| function           | description                               |
| ------------------ | ----------------------------------------- |
| `isNotEmptyArray`  | Checks if is an array and it's NOT empty  |
| `isNotEmptyObject` | Checks if is an object and it's NOT empty |
