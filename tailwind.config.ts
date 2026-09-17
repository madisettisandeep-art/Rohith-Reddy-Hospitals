import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            DEFAULT: "#F47A16",
            50: "#FFF5ED",
            100: "#FFE7D4",
            200: "#FED0AA",
            300: "#FDB47B",
            400: "#FB964A",
            500: "#F47A16",
            600: "#DE640B",
            700: "#C84E08",
            800: "#A94712",
            900: "#7F340D",
          },
          copper: "#A94712",
          deepOrange: "#C84E08",
          beige: {
            DEFAULT: "#E8D2A8",
            50: "#FCF9F3",
            100: "#F5EBDD",
            200: "#EEDDC5",
            300: "#E8D2A8",
            400: "#D8BC87",
            500: "#C7A667",
          },
          cream: "#FFF9F0",
          warmWhite: "#FFFCF8",
          darkText: "#2B211B",
          secondaryText: "#6F6258",
          border: "#E9DED0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 2px 12px -2px rgba(43, 33, 27, 0.05)",
        card: "0 4px 20px -2px rgba(169, 71, 18, 0.06), 0 2px 6px -1px rgba(43, 33, 27, 0.04)",
        cardHover: "0 12px 30px -4px rgba(244, 122, 22, 0.12), 0 4px 10px -2px rgba(43, 33, 27, 0.05)",
        cta: "0 8px 24px -4px rgba(244, 122, 22, 0.35)",
      },
      borderRadius: {
        "2xl": "18px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
