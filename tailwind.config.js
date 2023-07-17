/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0c29",
        secondary: "#141E30",
        tertiary: "#D21312",
      },
      backgroundImage: {
        bgContact: "url('/map.svg')",
      },
    },
  },
  plugins: [daisyui],
};
