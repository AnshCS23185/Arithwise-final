/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  safelist: [
    "scale-100",
    "scale-95",
    "scale-90",
    "opacity-100",
    "opacity-80",
    "opacity-60",
    "translate-y-0",
    "translate-y-4",
    "translate-y-8",
  ],

  theme: {
    extend: {

      /* ================= BORDER RADIUS ================= */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ================= COLORS (CSS VARIABLES) ================= */
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* Optional charts (kept from first config) */
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      /* ================= KEYFRAMES ================= */
      keyframes: {
        glowPulse: {
          "0%": {
            textShadow:
              "0 0 8px rgba(192, 38, 211, 0.5), 0 0 20px rgba(192, 38, 211, 0.4)",
          },
          "100%": {
            textShadow:
              "0 0 14px rgba(192, 38, 211, 0.95), 0 0 40px rgba(192, 38, 211, 0.85)",
          },
        },

        heroFade: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        glowPulse: "glowPulse 2.8s ease-in-out infinite alternate",
        heroFade: "heroFade 0.9s ease-out forwards",
        "gradient-x": "gradient-x 3s ease infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
  ],
};
