import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "hsl(var(--secondary-light))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'warm': 'var(--shadow-warm)',
        'card': 'var(--shadow-card)',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-warm': 'var(--gradient-warm)',
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
        "carousel-slide": {
          "0%, 20%": { opacity: "1" },
          "25%, 45%": { opacity: "0" },
          "50%, 70%": { opacity: "0" },
          "75%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "carousel-slide-2": {
          "0%, 20%": { opacity: "0" },
          "25%, 45%": { opacity: "1" },
          "50%, 70%": { opacity: "0" },
          "75%, 95%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "carousel-slide-3": {
          "0%, 20%": { opacity: "0" },
          "25%, 45%": { opacity: "0" },
          "50%, 70%": { opacity: "1" },
          "75%, 95%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "carousel-slide-4": {
          "0%, 20%": { opacity: "0" },
          "25%, 45%": { opacity: "0" },
          "50%, 70%": { opacity: "0" },
          "75%, 95%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "carousel-1": "carousel-slide 12s ease-in-out infinite",
        "carousel-2": "carousel-slide-2 12s ease-in-out infinite",
        "carousel-3": "carousel-slide-3 12s ease-in-out infinite",
        "carousel-4": "carousel-slide-4 12s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
