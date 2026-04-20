import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0F1A",
        steel: "#253044",
        mist: "#EAF1FB",
        accent: "#1D4ED8"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(15, 23, 42, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
