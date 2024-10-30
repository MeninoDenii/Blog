import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "brand-color": "#E07B67",
      "dark-10": "#121214",
      "dark-20": "#17171A",
      "dark-30": "#202024",
      "dark-40": "#252529",
      "dark-50": "#AFABB6",
      "dark-60": "#FFFFFF",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif", "space-grotesk"],
    },
  },
  plugins: [],
};
export default config;
