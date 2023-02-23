/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        background: '#292738',
        card: '#363447',
        circle: '#4A4556',
        text: '#81FBB8',
      },
      backgroundImage: {
        'violet-gradient': 'linear-gradient(121.94deg, #CE9FFC 15.98%, #7367F0 82.85%);',
        'goals-gradient': 'linear-gradient(121.94deg, #DF9780 15.98%, #A66DE9 82.85%);',
        'bars-gradient': ' linear-gradient(180deg, #90F7EC 0%, #32CCBC 100%);',
        'green-gradient': 'linear-gradient(180deg, #81FBB8 0%, #28C76F 100%);',
        'red-gradient': 'linear-gradient(180deg, #EA5455 0%, #FEB692 100%);'
      },
      gridTemplateColumns: {
        'cards': '296px 351px 1fr'
      },
      boxShadow: {
        'card-shadow': '3px 4px 26px rgba(0, 0, 0, 0.25);'
      },
      keyframes: {
        teste: {
          '0%': { scale: 0 },
          '100%': { scale: 1 }
        }
      },
      animation: {
        teste: 'teste 1s ease-in-out',
      },
      dropShadow: {
        'sales': '0 8px 8px rgba(115,103, 240, 0.30)',
        'goals': '0 8px 8px rgba(223,151, 128, 0.30)'
      }
    },
  },
  plugins: [],
}
