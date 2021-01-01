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

## vue-tailwind

Ref: https://www.vue-tailwind.com/

Set of Lightview and fully customizable Vue Components optimized for TailwindCss

### Install vue-tailwind
```
yarn add vue-tailwind
```

### Add the @tailwindcss/forms plugin
The default theme of this library depends on the @tailwindcss/forms plugin. To use it, follow the steps on the plugin source page. https://github.com/tailwindlabs/tailwindcss-forms
```
yarn add @tailwindcss/forms
```

Ref: https://github.com/tailwindlabs/tailwindcss-forms

Demo: https://tailwindcss-forms.vercel.app/

### Then add the plugin to your tailwind.config.js file:
```
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
```
