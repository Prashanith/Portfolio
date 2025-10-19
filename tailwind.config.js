/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F1035",
        secondary: "#A50044",
        tertiary: "#43A1D5",
      },
      backgroundImage: {
        bgContact: "url('/bg/map.svg')",
        bgTheme: "url('/bg/bg.jpeg')",
      },
    },
  },
  plugins: [daisyui],
};
