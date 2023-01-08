const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#E30B13'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    ".app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    primary,
    black: colors.black,
    white: colors.white,
    transparent: colors.transparent,
    yellow: {
      700: '#F5C521'
    },
    gray: {
      300: '#d9dae8',
      500: '#999AA5',
      700: '#39393f',
      900: '#191B1F',
    },
    extend: {
      spacing: {
        0.5: '0.12rem',
        layout: '2.75rem'
      },
      fontSize: {
        '2lg': '1.38rem'
      },
      borderRadius: {
        'image': '0.5rem',
        'layout': '0.8rem'
      },
      transitionTimingFunction: {
        DEFAULT: 'easy-in-out'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
      keyframes: {
        fade: {
          from: {opacity: 0},
          to: {opacity: 1}
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
},
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        animation: {
          fade: 'fade .5s easy-in-out',
          scaleIn: 'scaleIn .35s easy-in-out',
        }
      }
    },
  },
  plugins: [
      plugin(({addComponents, theme, addUtilities}) => {
addComponents({
  '.btn-primary': {
    backgroundPrimary: primary,
    color: '#fff',
    borderRadius: '0.65rem',
    transition: 'background-color .3s easy-in-out',
    '&:hover': {
      backgroundColor: '#ff0009'
    }
  }
})
})
  ],
}