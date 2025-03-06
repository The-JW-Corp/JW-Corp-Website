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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary-color)",
          alt: "var(--primary-alt)",
          "light-2": "var(--primary-light-2)",
        },
        white: {
          DEFAULT: "var(--white-color)",
        },
        gray: {
          "3": "var(--gray-3)",
          "4": "var(--gray-4)",
        },
        text: {
          subtle: "var(--text-subtle)",
        },
        border: {
          gray: "var(--border-gray)",
          "gray-3": "var(--border-gray-3)",
        },
      },
      borderRadius: {
        "radius-8": "8px",
        "radius-10": "10px",
        "radius-60": "60px",
        "radius-100": "100px",
      },
      fontFamily: {
        sans: ["Clash Display", "var(--font-clash)", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontSize: {
        h1: [
          "64px",
          {
            lineHeight: "78px",
            letterSpacing: "-3%",
            fontWeight: "400",
          },
        ],
        "h1-medium": [
          "64px",
          {
            lineHeight: "78px",
            letterSpacing: "-3%",
            fontWeight: "500",
          },
        ],
        h2: [
          "42px",
          {
            lineHeight: "51.66px",
            letterSpacing: "-3%",
            fontWeight: "500",
          },
        ],
        "h2-medium": [
          "42px",
          {
            lineHeight: "51.66px",
            letterSpacing: "-3%",
            fontWeight: "600",
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "39.2px",
            letterSpacing: "-3%",
            fontWeight: "500",
          },
        ],
        "h3-medium": [
          "32px",
          {
            lineHeight: "39.2px",
            letterSpacing: "-3%",
            fontWeight: "600",
          },
        ],
        "body-large-medium": [
          "20px",
          {
            lineHeight: "21.6px",
            fontWeight: "600",
          },
        ],
        "body-large-regular": [
          "20px",
          {
            lineHeight: "21.6px",
            fontWeight: "400",
          },
        ],
        "body-normal-medium": [
          "18px",
          {
            lineHeight: "22px",
            fontWeight: "600",
          },
        ],
        "body-normal-regular": [
          "18px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "19.68px",
            fontWeight: "400",
          },
        ],
        "body-medium": [
          "16px",
          {
            lineHeight: "19.68px",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
