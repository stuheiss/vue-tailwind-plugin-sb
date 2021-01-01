# vue-tailwind-plugin-sb

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Setup app with Tailwind

### Install Tailwind with vue cli plubin
```
vue add tailwind
```
### Support Heroicons

Ref: https://github.com/tailwindlabs/heroicons

Install
```
yarn add @vue-hero-icons/outline @vue-hero-icons/solid
```

Search for icons [here](https://vue-hero-icons.netlify.app/)

Example:
```
<template>
  <div>
    <CheckIcon />
    <StarIcon size="1.5" class="custom-class"/>
  </div>
</template>

<script>
// Only import what you need!
import { CheckIcon, StarIcon } from "@vue-hero-icons/solid"
</script>
```
