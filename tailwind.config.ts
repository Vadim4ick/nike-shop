import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "black-100": "#111111",
      "black-200": "#757575",
      "gray-100": "#f5f5f5",
      "gray-200": "#e5e5e5",
      "gray-250": "#cccccc",
      "gray-300": "#7e7e7e",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        nike: ["Nike", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
