/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0911'
      }
    },
    colors: {
      violet: {
        500: '#8257E5',
        hover: '#9674E5'
      },
      gray: {
        500: '#3C3748',
        hover: '#6A617F'
      },
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: 'Inter, sans-serif'
    }
  },
  plugins: [],
}
