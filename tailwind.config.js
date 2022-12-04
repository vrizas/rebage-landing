/** @type {import('tailwindcss').Config} \*/
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#72B184',
        'success': '#1CBC00',
        'gray': '#565555',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'rebage': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
      },
    },
  },
  plugins: [],
}