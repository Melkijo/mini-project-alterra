/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/assets/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('./src/assets/preline/plugin')],
}

