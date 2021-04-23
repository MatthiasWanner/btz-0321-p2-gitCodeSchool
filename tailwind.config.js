const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#CBAC77',
          DEFAULT: '#CBAC77',
          dark: '#CBAC77',
          hover: '#6C5F47',
        },
        homeGray: {
          dark: '#1D1E1E',
        },
        repos: {
          dark: '#FCE7D0',
        },
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
      },
    },
  },
  variants: {},
  plugins: [],
};
