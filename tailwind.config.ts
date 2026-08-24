import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F4F0E8",
          dark: "#E8E2D5",
          light: "#FCFAF6",
          muted: "#DDD6C8",
        },
        ink: {
          DEFAULT: "#111111",
          pure: "#000000",
          soft: "#2A2A2A",
          muted: "#666666",
          faint: "#999999",
          border: "rgba(17, 17, 17, 0.12)",
          hairline: "rgba(17, 17, 17, 0.08)",
        },
        cobalt: {
          DEFAULT: "#4057FF",
          hover: "#2A41ED",
          light: "#6477FF",
          faint: "rgba(64, 87, 255, 0.08)",
          soft: "#DDE4FF",
        },
        lime: {
          DEFAULT: "#C7F36B",
          hover: "#B6E955",
          faint: "rgba(199, 243, 107, 0.2)",
        },
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.18em",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
