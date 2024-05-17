import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        white: [
          "0 2px 4px rgb(255 255 255 / 0.2)",
          "0 3px 6px rgb(255 255 255 / 0.1)",
          "0 4px 8px rgb(255 255 255 / 0.05)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
