/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ration: 3/2)'},
        'tallscreen': {'raw': '(min-aspect-ration: 1/2)'},
      }
    },
  },
  plugins: [],
}

