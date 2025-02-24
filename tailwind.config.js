/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        '250' : '2.5',
        '230' : '2.3',
        '180' : '1.8',
      }
    },
  },
  plugins: [],
};


