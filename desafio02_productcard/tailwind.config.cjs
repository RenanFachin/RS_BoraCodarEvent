/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      pink: {
        '500': '#D9CDF7',
        '900': '#271A45'
      }
    },
    extend: {
      fontFamily: {
        serif: 'Crimson Pro, sans-serif',
        sans: 'Lato, sans-serif'
      }
    },
  },
  plugins: [],
}
