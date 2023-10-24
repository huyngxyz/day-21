/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aspekta': ['Aspekta', 'sans-serif']
      },
      colors: {
        'bg': '#FBF8EE',
        'primary': '#2B60EA',
        'loading': '#93A5D2',
        'light-primary': '#99B3F5',
        'underline': '#9A9A9A'
      }
    },
  },
  plugins: [],
}