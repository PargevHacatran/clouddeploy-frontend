import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#0a0a0a",
        "foreground": "#fff",
        "grey-color": "#bdbdbd",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-15": "rgba(255, 255, 255, 0.15)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-80": "rgba(255, 255, 255, 0.8)",
      },
      backgroundImage: {
        checkbox: "url('/img/checkbox.png')"
      }
    },
  },
  plugins: [],
};

export default config;