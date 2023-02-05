const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  darkMode:
  'class'
,
  theme: {
    screens: {
      'sm': '380px',
      // => @media (min-width: 640px) { ... }

      'md': '450px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily: {
        Rubik: ['var(--font-rubik)', ...fontFamily.sans],
      },
      colors: {
        background: {
          page: "#2D2A37",
          calculator: "#2D2A37",
          buttons: "#462878",
          EqualButton: "#7F45E2"
        },
        lightMode: {
          background: "#F1F2F3",
          text: "#000000",
          buttonHighEmpahsis: "#4B5EFC",
          buttonMediumEmpahsis: "#D2D3DA",
          buttonLowEmpahsis: "#FFFFFF",
        },
        gray: {
          100: "#EBEBEB",
          200: "#6B6B6B"
        }
      },
      borderRadius: {
        "4xl": '3rem'
      },
      backgroundImage: {
        'calculatorButtons': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37'
      },
      boxShadow: {
        'calculatorButtonShadow': ' 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);',

        'calculatorShadow': '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);'
      }
    },
  },
  plugins: [],
}
