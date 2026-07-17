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
        verde: {
          DEFAULT: "#1D9E75",
          dark:    "#155C47",
          deep:    "#0C1A14",
          mid:     "#2DB88A",
          light:   "#E8F7F1",
          border:  "rgba(29,158,117,0.18)",
        },
        ink: {
          DEFAULT: "#0C0C0C",
          mid:     "#222222",
          muted:   "#5A5A5A",
          faint:   "#999999",
          ghost:   "rgba(0,0,0,0.05)",
          border:  "rgba(0,0,0,0.08)",
        },
        bege: {
          DEFAULT: "#F0EAE0",
          light:   "#FAF5EF",
          mid:     "#E5DDD2",
          dark:    "#D6CCC0",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle:  "#FAF5EF",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display:      ["clamp(2.75rem,5.5vw,5rem)",   { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.875rem,4vw,3rem)",     { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.4rem,3vw,2.1rem)",     { lineHeight: "1.18", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        float:  "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        card:   "0 1px 8px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
        header: "0 1px 16px rgba(0,0,0,0.06)",
        green:  "0 4px 20px rgba(29,158,117,0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
