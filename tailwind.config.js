/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-coral': 'rgba(255, 99, 71, 0.8)', 
        'dark-coral': 'rgba(255, 182, 193, 0.5)', 
      },
    },
  },
  plugins: [],
}