/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        background: "#1A1924",
        gray: {
          100: "#E1E1E6",
          700: "#282843"
        },
        online: "#00B37E",
        card: {
          sent: "#633BBC",
          received: "#07847E"
        }
      }
    },
  },
  plugins: [],
}
