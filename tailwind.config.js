/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F2F7F5",
          100: "#E1EBE6",
          200: "#C4D9CD",
          300: "#A2C2B1",
          400: "#7FA893",
          500: "#5E8C76",
          600: "#48705D",
          700: "#365546",
          800: "#273D33",
          900: "#1A2922",
          950: "#0F1A15",
        },
        accent: {
          50: "#FBF7F2",
          100: "#F5EFE6",
          200: "#EBDDCB",
          300: "#DFC8AD",
          400: "#D2B18D",
          500: "#C19669",
          600: "#A87D51",
          700: "#8A623C",
          800: "#6D4C2F",
          900: "#523824",
          950: "#3D2919",
        },
      },
    },
  },
  plugins: [],
};
