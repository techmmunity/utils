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

| function               | description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `cleanObj`             | Remove undefined and null values from an object                        |
| `getArrayUniqueValues` | Remove duplicated values of an array (only work with primitive values) |
| `getEnumValues`        | Return the enum values                                                 |
| `getTypeof`            | Fix native "typeof"                                                    |
| `hasRequiredEnvVars`   | Verify if all env vars are defined                                     |
| `isEmptyArray`         | Checks if is an array and it's empty                                   |
| `isEmptyObject`        | Checks if is an object and it's empty                                  |
| `isNotEmptyArray`      | Checks if is an array and it's NOT empty                               |
| `isNotEmptyObject`     | Checks if is an object and it's NOT empty                              |
