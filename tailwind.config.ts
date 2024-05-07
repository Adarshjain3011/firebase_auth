import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#192734",
        "darker-blue": "#425568",
        "light-blue": "#00B2FF",
        "teal": "#1976D2",
        "white": "#FFFFFF",
        "light-dark":"#FFFFFFBF"
      },
    },
  },
  plugins: [],
};

export default config;






