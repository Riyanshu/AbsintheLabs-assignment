/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      elevation: '#080a0b',
      elevation1: '#0c0e10',
      elevation2: '#111315',
      elevation3: '#16181a',
      text1: '#f7f7f8',
      text2: '#abafb4',
      hover: '#8AB7B2',
      green: '#27D17F',
      green1: '#182B24',
      green2: '#006258',
      green3: '#0A1F1F',
    },
    extend: {},
  },
  plugins: [],
}


