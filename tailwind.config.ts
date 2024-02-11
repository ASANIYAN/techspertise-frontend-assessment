import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color1: "#101828",
        color2: "#667085",
        color3: "#344054",
        color4: "#6941C6",
        color5: "#27779B",
        color6: "#475467",
        color7: "#D0D5DD",
        error: "#E44258",
      },
      screens: {
        xxxs: "280px",
        // => @media (min-width: 280px) { ... }
        xxs: "320px",
        // => @media (min-width: 320px) { ... }
        "340": "340px",
        // => @media (min-width: 340px) { ... }
        "400": "400px",
        // => @media (min-width: 400px) { ... }
        xs: "480px",
        // => @media (min-width: 480px) { ... }
        d: "500px",
        // => @media (min-width: 500px) { ... }
        s: "576px",
        // => @media (min-width: 576px) { ... }
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
export default config;
