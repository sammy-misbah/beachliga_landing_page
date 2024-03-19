/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beachliga_blue: "#00B8DE",
        beachliga_grey: "#36343B",
      },
      fontFamily: {
        body: ["Gotham"],
      },
    },
  },
  plugins: [],
};
