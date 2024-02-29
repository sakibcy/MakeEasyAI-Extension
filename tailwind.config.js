/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // darkMode: ['selector', '[data-mode="dark"]'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "dark-mode": "#152026",
      },
      order: {
        '13' : '13'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}

