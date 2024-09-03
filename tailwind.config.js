/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#53F353',
        'neon-blue': '#3B82F6',
        'lighter-blue': 'rgba(51, 112, 255, 0.70)',
        'light': '#FCFCFC', 
        'dark': '#262A2B',
        'darker': '#1D1F20', 
      }
    },
  },
  plugins: [],
}