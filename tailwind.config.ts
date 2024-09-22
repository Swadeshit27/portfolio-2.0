import type { Config } from "tailwindcss";

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
      // fontFamily: {
      //   libre: "Libre Baskerville",
      //   dancing: "Dancing Script",
      //   poppins: "Poppins",
      // },
      screens: {
        xxs: "375px",
        xs: "475px",
        mlg: "850px",
      },
      colors: {
        light_white_2: "rgba(255, 255, 255, 0.2)",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
