/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#61F475',
        'neon-blue': '#3370FF',
        'lighter-blue': 'rgba(51, 112, 255, 0.70)',
        'light': 'F2F5FF', 
      }
    },
  },
  plugins: [],
}