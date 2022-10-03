/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["circular-std", "sans-serif"],
      serif: ["smith-allison", "serif"],
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
    },
    extend: {
      colors: {
        primary: "#41D6C7",
        secondary: "#FFC700",
        third: "#FFD600",
      },
      backgroundImage: {
        bgHero: "url('/images/hero.jpg')",
      },
    },
  },
  plugins: [],
};
