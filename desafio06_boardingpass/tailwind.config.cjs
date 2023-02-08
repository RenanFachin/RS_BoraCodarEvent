/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(167.96deg, #8257E5 0%, #271A45 100%);'
      },
      colors: {
        violet: {
          950: "#633BBC"
        }
      }
    },
  },
  plugins: [],
}
