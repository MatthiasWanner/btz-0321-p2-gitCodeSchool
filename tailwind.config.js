const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        green: {
          online: '#00FF00',
        },
        gold: {
          light: '#CBAC77',
          DEFAULT: '#CBAC77',
          dark: '#CBAC77',
          hover: '#6C5F47',
        },
        homeGray: {
          dark: '#1D1E1E',
          darker: '#141414'
        },
        repos: {
          dark: '#252828',
          hover: '#1D1E1E',
        },
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
      },
      padding: ['hover'],
    },
  },
  variants: {},
  plugins: [],
};
