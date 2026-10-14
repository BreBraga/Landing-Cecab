import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0753A5",
        deep: "#052E63",
        electric: "#0B6BCB",
        orange: "#FF6413",
        orange2: "#FF8A3D",
        cream: "#FFF8EE",
        ink: "#10213A",
        muted: "#65758B",
        soft: "#E8F1FA",
        yellow: "#FFD84D",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
