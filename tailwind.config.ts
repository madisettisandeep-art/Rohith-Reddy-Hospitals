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
            DEFAULT: "#1D4ED8",
            50: "#EFF6FF",
            100: "#DBEAFE",
            200: "#BFDBFE",
            300: "#93C5FD",
            400: "#60A5FA",
            500: "#2563EB",
            600: "#1D4ED8",
            700: "#1E40AF",
            800: "#1E3A8A",
            900: "#10355D",
          },
          blue: {
            DEFAULT: "#1D4ED8",
            50: "#EFF6FF",
            100: "#DBEAFE",
            200: "#BFDBFE",
            300: "#93C5FD",
            400: "#60A5FA",
            500: "#2563EB",
            600: "#1D4ED8",
            700: "#1E40AF",
            800: "#1E3A8A",
            900: "#10355D",
          },
          navy: {
            DEFAULT: "#10355D",
            50: "#F0F6FC",
            100: "#E1EEFB",
            200: "#C5DDF7",
            300: "#90BEED",
            400: "#4B94DE",
            500: "#2572C4",
            600: "#1757A3",
            700: "#134684",
            800: "#10355D",
            900: "#0B2440",
            950: "#07172A",
          },
          copper: "#10355D",
          deepOrange: "#1D4ED8",
          beige: {
            DEFAULT: "#CBD5E1",
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
          },
          cream: "#F8FAFC",
          warmWhite: "#FFFFFF",
          darkText: "#0F172A",
          secondaryText: "#475569",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 2px 12px -2px rgba(16, 53, 93, 0.05)",
        card: "0 4px 20px -2px rgba(16, 53, 93, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)",
        cardHover: "0 12px 30px -4px rgba(29, 78, 216, 0.15), 0 4px 10px -2px rgba(15, 23, 42, 0.06)",
        cta: "0 8px 24px -4px rgba(29, 78, 216, 0.35)",
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
