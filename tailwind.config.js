/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      order: {
        '13' : '13'
      }
    },
  },
  plugins: [require("daisyui")],
}

