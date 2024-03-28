/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beachliga_blue: "#00B8DE",
        beachliga_grey: "#36343B",
        beachliga_yellow: "#FFB600",
        beachliga_neutral: "#2B2930",
        beachliga_text: "#3B383E",
        beachliga_bg_grey: "#F9FDFF",
        beachliga_lightblue: "#DCF5FF",
        beachliga_lightgrey: "#EDEDED",
        beachliga_blue_border: "#0DBAE0",
      },
      fontFamily: {
        body: ["Gotham"],
      },
    },
    fontFamily: {
      sans: ["IBM Plex San"],
    },
  },
  plugins: [],
};
