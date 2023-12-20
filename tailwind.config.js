/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      }
    },
  },
  plugins: [],
}