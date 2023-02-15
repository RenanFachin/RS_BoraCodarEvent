/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      primary: 'Roboto'
    },
    extend: {
      colors: {
        stroke: '#EAEAEA',
        title: '#121214',
        details: '#E45858',
        bgColor: '#F8F8FF'
      }
    },
  },
  plugins: [],
}
