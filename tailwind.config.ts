import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* — Palette de marque, reprise de la carte papier — */
        lagoon: {
          50: "#eefaff",
          100: "#d9f3ff",
          200: "#bbe9ff",
          300: "#8bdcff",
          400: "#53c6f8",
          500: "#22a9e0",
          600: "#1a8bbf",
          700: "#1a6f99",
          800: "#1c5c7d",
          900: "#1c4d68",
        },
        fuchsia: {
          50: "#fff1f6",
          100: "#ffe4ed",
          200: "#ffc9dd",
          300: "#ff9dc0",
          400: "#ff639f",
          500: "#e4457e",
          600: "#d02563",
          700: "#b0164e",
          800: "#921642",
          900: "#7c173c",
        },
        mango: {
          50: "#fffaeb",
          100: "#fff2c6",
          200: "#ffe388",
          300: "#ffce4a",
          400: "#ffb627",
          500: "#f9930a",
          600: "#dd6c05",
          700: "#b74b08",
          800: "#943a0e",
          900: "#7a300f",
        },
        coral: {
          50: "#fff4f1",
          100: "#ffe5de",
          200: "#ffcfc2",
          300: "#ffad97",
          400: "#ff7f5c",
          500: "#f9572f",
          600: "#e73a15",
          700: "#c22b0f",
          800: "#a02714",
          900: "#842618",
        },
        palm: {
          50: "#effef4",
          100: "#d9fde5",
          200: "#b5f9cd",
          300: "#7df2a9",
          400: "#3ee27e",
          500: "#16c95f",
          600: "#0ba54b",
          700: "#0c813e",
          800: "#0f6635",
          900: "#0d542e",
        },
        cream: "#fffaf2",
      },
      fontFamily: {
        playfair: ["var(--font-display)", "cursive"],
        display: ["var(--font-display)", "cursive"],
        montserrat: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
      boxShadow: {
        pop: "0 18px 40px -18px rgb(28 77 104 / 0.45)",
        "pop-lg": "0 32px 70px -28px rgb(28 77 104 / 0.55)",
        sticker: "0 6px 0 0 rgb(28 77 104 / 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "60%": { transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 32s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        float: "float 7s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pop-in": "pop-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        wave: "wave 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
