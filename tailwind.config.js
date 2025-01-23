/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a000c8',
        secondary: '#b100cd',
      },
    },
  },
  plugins: [],
};