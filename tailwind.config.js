/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal':'#20B2AA',
        'custom-blue':'#2071B2',
        'custom-green':'#105955',
      }
    },
  },
  plugins: [],
}