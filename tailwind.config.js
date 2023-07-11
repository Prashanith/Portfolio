/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#051225",
        secondary: "#1b2432",
        tertiary: "#D21312",
      },
      backgroundImage: {
        bgContact: "url('/map.svg')",
      },
    },
  },
  plugins: [daisyui],
};
